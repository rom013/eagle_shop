import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { SignOut } from "phosphor-react"
import { useNavigate } from "react-router-dom"

export function SignOutList(){
    const navigate = useNavigate()
    return(
        <button 
            className="link after:bg-red-600 hover:text-red-700"
            onClick={()=>{
                localStorage.removeItem("authorizationUser")
                localStorage.removeItem("auth")
                navigate("/")
            }}
        >Sign out</button>
    )
}
export function SignOutPopUp({sign}){
    const navigate = useNavigate()
    return(
        <DropdownMenu.Item 
            className="outline-none text-white flex items-center gap-4 cursor-pointer hover:bg-purple-900 py-2 px-8 w-full"
            onClick={()=>{
                localStorage.removeItem("authorizationUser")
                localStorage.removeItem("auth")
                sign(false)
                navigate("/")
            }}
        >
            <SignOut size={26}/>
            <p className="font-semibold text-base">Sair</p>
        </DropdownMenu.Item>

    )
}