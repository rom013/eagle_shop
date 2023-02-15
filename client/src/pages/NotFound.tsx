import { GithubLogo } from "phosphor-react"
import Header from "../components/Header"
import logo from "../image/logo_eagle.svg"

export default function NotFound(){
    return(
        <>
            <Header/>
            <main className="bg-blur min-h-[calc(100vh_-_68px)] bg-no-repeat bg-cover flex flex-col justify-between items-center py-10">
                <img src={logo} alt="logo eagle" width={150} className=""/>
                <div>
                    <h1 className="text-white font-extrabold text-[200px]">404</h1>
                    <p className="text-center text-white">Page not found</p>
                </div>
                <a href="https://github.com/rom013" target="_blank" className="flex gap-3 text-white">
                    <GithubLogo color="#ffffff" size={24}/>
                    <span>@rom013</span>
                </a>
            </main>
        </>
    )
}