import logo from '../image/logo_light.svg'
import UserButton from './UserButton'

export default function Header(){
    return(
        <header className='bg-[#4C1D95]/50 py-3 px-10'>
            <div className='max-w-6xl mx-auto flex justify-between items-center'>
                <div className="h-10">
                    <img src={logo} alt="logo eagle" className='h-full'/>
                </div>

                <UserButton/>
            </div>
        </header>
    )
}