import { DiscordLogo, FacebookLogo, TwitchLogo, YoutubeLogo } from 'phosphor-react'
import logoEagle from '../image/logo_eagle.svg'
import { useNavigate } from 'react-router-dom'
export default function Footer(){
    const navigate = useNavigate()
    return(
        <footer className="py-10 px-8 bg-[#190D1A] min-h-[240px] flex flex-col justify-center">
            <div className="flex justify-evenly gap-6">
                <a onClick={()=>navigate('/')} className='w-40 flex items-center cursor-pointer'>
                    <img src={logoEagle} alt="logo eagle" className='w-full'/>
                </a>

                <div className='flex flex-col gap-8'>
                    <div className='flex justify-end gap-3'>
                        <FacebookLogo color='#ffffff' size={32}/>
                        <YoutubeLogo color='#ffffff' size={32}/>
                        <DiscordLogo color='#ffffff' size={32}/>
                        <TwitchLogo color='#ffffff' size={32}/>
                    </div>
                    <div className='flex gap-8 text-gray-500 text-xs'>
                        <a href="#">Termos de Serviço</a>
                        <a href="#">Política de privacidade</a>
                        <a href="#">Política de reembolso da loja</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}