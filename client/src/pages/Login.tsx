import { useNavigate } from "react-router-dom"
import logoEagle from "../image/logo_eagle.svg"
import { useState } from "react"
import { Eye, EyeSlash, Lock, User } from "phosphor-react"

export default function Login(){
    const navigate = useNavigate()
    const [state, setState] = useState(false)

    return (
        <div className="bg-blur min-h-screen bg-no-repeat bg-cover flex justify-between">
            <section className="justify-center items-center hidden md:flex flex-1">
                <div className="w-3/5 max-w-lg cursor-pointer" onClick={()=>navigate("/")}>
                    <img src={logoEagle} alt=""/>
                </div>
            </section>
            <main className="w-full md:w-[600px] bg-[#D9D9D9]/10 backdrop-blur-sm p-16 flex flex-col">
                <h2 className="text-white font-semibold text-6xl font-sora">
                    Log in
                </h2>

                <form
                    onSubmit={e=>e.preventDefault()}
                    className="flex flex-col gap-4 mt-20"
                >
                    <div className="container-input">
                        <User weight="bold" size={24} color="#808080"/>
                        <input
                            type={"text"}
                            placeholder="username"
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="container-input">
                            <Lock weight="bold" size={24} color="#808080"/>
                            <input
                                type={"password"}
                                placeholder="password"
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
                        className="bg-[#A21CAF] w-full flex justify-center items-center rounded-full py-3 text-3xl font-bold text-white mt-16 hover:bg-[#91169c]"
                    >
                        Log in
                    </button>
                </form>

                <div className="mt-auto flex justify-center gap-10 font-sora">
                    <span className="text-white">
                        Don’t have an account?
                    </span>
                    <a onClick={()=>navigate("/register")} className="text-[#FD004C] font-bold cursor-pointer">Sign up</a>
                </div>
            </main>
        </div>
    )
}