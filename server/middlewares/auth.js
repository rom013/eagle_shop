const jwt = require('jsonwebtoken')

const middlewareAuth = async (req, res, next)=>{
    const { authorization } = req.headers

    if(!authorization){
        res.status(401).json({Mensage : "Error"})
    }

    const token = authorization.split(' ')[1]
    try {
        const { id_user } = jwt.verify(token, process.env.JWT_SECRET)
        next()
    } catch (error) {
        res.status(401).json({Mensage : "Invalid token"})
    }   
}

module.exports = middlewareAuth