import { useNavigate } from "react-router-dom"
import logoEagle from "../image/logo_eagle.svg"
import { useState } from "react"
import { EnvelopeOpen, Eye, EyeSlash, Lock } from "phosphor-react"
import axios from "axios"

export default function Login(){
    const navigate = useNavigate()
    const [state, setState] = useState(true)

    const [pass, setPass] = useState('')
    const [email, setEmail] = useState('')
    const [errorAuthorization, setErrorAuthorization] = useState(false)
    const [loadingRequest, setLoadingRequest] = useState(false)

    const option = {
        method: "POST",
        url: `${import.meta.env.VITE_URL_SERVER}/login`,
        data: {
            "password": pass,
            "email": email
        }
    }

    return (
        <div className="bg-blur min-h-screen bg-no-repeat bg-cover flex justify-between">
            <section className="justify-center items-center hidden md:flex flex-1">
                <div className="w-3/5 max-w-lg cursor-pointer" onClick={()=>navigate("/")}>
                    <img src={logoEagle} alt=""/>
                </div>
            </section>
            <main className="w-full md:w-[600px] bg-[#D9D9D9]/10 backdrop-blur-sm px-6 py-16 md:px-16 flex flex-col">
                <h2 className="text-white font-semibold text-6xl font-sora">
                    Log in
                </h2>
                <form
                    onSubmit={(e)=>{
                        e.preventDefault()
                        setLoadingRequest(true)
                        
                        axios(option)
                            .then(e=>{
                                localStorage.setItem("authorizationUser", e.data.token)
                                localStorage.setItem("auth", "true")
                                setLoadingRequest(false)
                                navigate('/')
                            })
                            .catch(err=>{
                                setErrorAuthorization(true)
                                setLoadingRequest(false)
                            })
                            .finally(()=>{
                                setLoadingRequest(false)
                            })
                    }}
                    className="flex flex-col gap-4 mt-20"
                >
                    {
                        errorAuthorization && <span className="text-red-500 text-center">Senha ou email incorretos</span>
                    }
                    <div className="container-input">
                        <EnvelopeOpen weight="bold" size={24} color="#808080"/>
                        <input
                            type={"text"}
                            placeholder="Email"
                            onChange={e=>setEmail(e.target.value.trim())}
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="container-input">
                            <Lock weight="bold" size={24} color="#808080"/>
                            <input
                                type={state ? "password" : "text"}
                                placeholder="Password"
                                onChange={(e)=>setPass(e.target.value.trim())}
                            />
                            <label
                                className="cursor-pointer select-none"
                                htmlFor="pass"
                                onClick={() => {
                                    setState(!state)
                                }}
                            >
                                {
                                    state ? <Eye size={24} color="#808080"/> : <EyeSlash size={24} color="#808080"/>
                                }
                            </label>
                        </div>
                        <a href="#" className="font-sora underline text-white text-xs">I forgot my password</a>
                    </div>

                    <button
                        type="submit"
                        className="disabled:opacity-25 disabled:cursor-not-allowed bg-[#A21CAF] w-full flex justify-center items-center rounded-full py-3 text-3xl font-bold text-white mt-16 hover:bg-[#91169c]"
                        disabled={pass.length > 0 ? false : true}
                    >
                        {
                            !loadingRequest ? "Log in" : <div className="spinner"></div>
                        }
                    </button>
                </form>

                <div className="mt-auto flex justify-center gap-4 md:gap-10 font-sora">
                    <span className="text-white">
                        Don’t have an account?
                    </span>
                    <a onClick={()=>navigate("/register")} className="text-[#FD004C] font-bold cursor-pointer">Sign up</a>
                </div>
            </main>
        </div>
    )
}