/* start-imports */
const middlewareAuth = require('../middlewares/auth')
const {connection} =  require('./lib/mysql')
const express = require('express')
const cors =require('cors') 
const bcript = require('bcrypt')
const jwt = require('jsonwebtoken')
const uuid = require('uuid')
require("dotenv").config()


/* end-imports */

/* start config */

const app = express()
app.use(express.json())
app.use(cors())

app.use(express.static('public'));
// app.use('/images', express.static('images'));

/* end config */

/* start routes */

app.get('/game-list',  (req,res)=>{
    connection.query('SELECT * FROM lista_jogos', (err, result)=>{
        if(err){
            res.status(400).json({Mensage: err})
            return
        }
        return res.json(result)
    })
})

app.post('/add-game', middlewareAuth, (req, res)=>{
    const {game_name, game_price, img_url} = req.body
    const id_user = uuid.v1()

    const SQLScriptLine = "INSERT INTO lista_jogos (id_jogos, nome_jogo, preco_jogo, url_img) VALUE (?,?,?,?);"
    connection.query(SQLScriptLine, [id_user, game_name, game_price, img_url], (err)=>{
        if(err){
            res.status(400).json({Mensage: err})
        }
        else{
            res.json({Mensage: "ok"})
        }
    })
})

app.post('/register', async (req,res)=>{
    const auth = req.headers.authorization
    if(!auth || auth !== 'password'){
        res.status(401).send('OPS!')
    }
    const { name, email, cell, password, nickname } = req.body
    
    const hashPassword = await bcript.hash(password, 10)
    const id_user = uuid.v1()

    const SQL = "INSERT INTO usuario (id_user, senha_user, email_user, cell_user, nome_user, nick_user) VALUE (?,?,?,?,?,?)"

    connection.query(SQL, [id_user, hashPassword, email, cell, name, nickname], (err)=>{
        if(err){
            res.status(403).json({
                error: "The data is already in our database" 
            })
        }      
        else{
            res.json({success: "successfully registered"})
        }
    })
})

app.post('/login', async (req,res)=>{
    const { password, email } = req.body

    const SQL = `SELECT id_user, senha_user, email_user FROM usuario WHERE email_user = "${email}"`
    connection.query(SQL, async(error, result)=>{
        if(error){
            res.status(403).json({error: "Connection error!"})
            return
        }
        else if(result.length < 1){
            res.status(403).json({Error: "Password or Email invalid"})
            return
        }

        const {senha_user, id_user} = result[0]

        let passwordDataBase = senha_user
        const verifyPassword = await bcript.compare(password, passwordDataBase)
        
        if(!verifyPassword){
            res.status(403).json({Error: "Password or Email invalid"})
            return
        }

        const token = jwt.sign({ id:  id_user}, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });


        return res.json({ auth: true, token: token });
        
    })
})

app.get("/profile/:id", middlewareAuth, (req, res)=>{
    const { id } = req.params
    connection.query(`SELECT email_user, cell_user, nome_user, nick_user FROM usuario WHERE id_user = "${id}"`, 
        (err, data)=>{
            if(err){
                res.status(500).json(err)
            }
            
            if(data.length == 0){
                res.json({mensage: `id: ${id}, not find`})
                return
            }
            return res.json({data})
        }
    )

})

/* end routes */

app.listen(9999, ()=>{
    console.log("server ON");
})