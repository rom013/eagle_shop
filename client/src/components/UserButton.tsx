import { ShoppingCart, SignOut, User } from "phosphor-react"
import { useEffect, useState } from "react"
import image_profile from "../image/image 1.png"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import axios from "axios";
import { useNavigate } from "react-router-dom"


interface v {
    method: string,
    url: string
    headers:{
        Authorization: string
    }
}

export default function UserButton(){
    const navigate = useNavigate()

    const [nickname, setNickname] = useState<string>('')
    const [userAtho, setUseAtho] = useState(false)

    useEffect(()=>{
		const jwtToken = localStorage.authorizationUser

		const option:v = {
			method: "GET",
			url: "http://localhost:9999/profile/4",
			headers: {
				Authorization: `Bearer ${jwtToken}`
			}
		}
		axios(option)
			.then((e)=>{
				setNickname(e.data.data[0].nick_user);
                setUseAtho(true)
			})
			.catch(e=>{
                setUseAtho(false)
				console.log("Não autorizado!");
			})
	},[])
    
    return(
        <>
            {
                userAtho
                ? (   
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                            <button 
                                className="flex text-white items-center gap-3 py-1 px-2 cursor-pointer rounded hover:bg-purple-900/20 outline-none" 
                                aria-label="Customise options"
                            >
                                <div className="border-purple-900 rounded-full border-2 overflow-hidden w-9 h-9">
                                    <img src={image_profile} className="w-full h-full object-cover"/>
                                </div>
                                <p className="font-semibold text-base">{nickname}</p>
                            </button>
                        </DropdownMenu.Trigger>

                        <DropdownMenu.Portal>
                            <DropdownMenu.Content sideOffset={5} className="py-8 bg-purple-900/50 w-52 flex flex-col border-t-2 border-t-purple-500">

                                <DropdownMenu.Item 
                                    className="outline-none text-white flex items-center gap-4 cursor-pointer hover:bg-purple-900 py-2 px-8 w-full"
                                >
                                    <User size={26}/>
                                    <p className="font-semibold text-base">Perfil</p>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item 
                                    className="outline-none text-white flex items-center gap-4 cursor-pointer hover:bg-purple-900 py-2 px-8 w-full"
                                >
                                    <ShoppingCart size={26}/>
                                    <p className="font-semibold text-base">Meus jogos</p>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item 
                                    className="outline-none text-white flex items-center gap-4 cursor-pointer hover:bg-purple-900 py-2 px-8 w-full"
                                    onClick={()=>{
                                        localStorage.removeItem("authorizationUser")
                                        setUseAtho(false)
                                    }}
                                >
                                    <SignOut size={26}/>
                                    <p className="font-semibold text-base">Sair</p>
                                </DropdownMenu.Item>

                                <DropdownMenu.Arrow className="fill-purple-500" />
                            </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                ) 
                : (
                    <div 
                        className="flex text-white items-center gap-3 py-1 px-2 cursor-pointer rounded hover:bg-purple-900/20"
                        onClick={()=>{
                            navigate('/login')
                        }}
                    >
                        <div className="rounded-full border-2">
                            <User size={24} className="m-1"/>
                        </div>
                        <p className="font-semibold text-base">Entrar</p>
                    </div>
                )
            }
        </>
    )
}