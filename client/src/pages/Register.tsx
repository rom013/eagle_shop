import { useNavigate } from "react-router-dom"
import logoEagle from "../image/logo_eagle.svg"
import { useState } from "react"
import { ArrowDown, CaretDown, CaretUp, EnvelopeSimple, EnvelopeSimpleOpen, Eye, EyeSlash, IdentificationCard, Lock, User } from "phosphor-react"
import * as Select from '@radix-ui/react-select';

export default function Login(){
    const navigate = useNavigate()
    const [state, setState] = useState(false)

    const [focusInput, setFocusInput] = useState(false)
    const [focusInputPass, setFocusInputPass] = useState(false)

    const numbers = [1,7,20,27,30,31,32,33,34,36,39,40,41,43,44,45,46,47,48,49,51,52,53,54,55,56,57,58,60,61,62,63,64,65,66,81,82,84,86,90,91,92,93,94,95,98,211,212,213,216,218,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,260,261,262,263,264,265,266,267,268,269,290,291,297,298,299,350,351,352,353,354,355,356,357,358,359,370,371,372,373,374,375,376,377,378,379,380,381,382,383,385,386,387,389,420,421,423,500,501,502,503,504,505,506,507,508,509,590,591,592,593,594,595,596,597,598,599,670,671,672,673,674,675,676,677,678,679,680,681,682,683,685,686,687,688,689,690,691,692,850,852,853,855,856,880,886,960,961,962,963,964,965,966,967,968,970,971,972,973,974,975,976,977,992,993,994,995,996,998]

    return (
        <div className="bg-blur min-h-screen bg-no-repeat bg-cover flex justify-between">
            <section className="justify-center items-center hidden md:flex flex-1">
                <div className="w-3/5 max-w-lg cursor-pointer" onClick={()=>navigate("/")}>
                    <img src={logoEagle} alt=""/>
                </div>
            </section>
            <main className="w-full md:w-[600px] bg-[#D9D9D9]/10 backdrop-blur-sm p-16 flex flex-col">
                <h2 className="text-white font-semibold text-6xl font-sora">
                    Sign in
                </h2>

                <form
                    onSubmit={e=>e.preventDefault()}
                    className="flex flex-col gap-4 mt-20"
                >
                    <div 
                        className="container-input"
                    >
                        <User weight={"bold"} size={24} color="#808080"/>
                        <input
                            type={"text"}
                            placeholder="name"
                        />
                    </div>
                    <div 
                        className="container-input"
                    >
                        <IdentificationCard weight="bold" size={24} color="#808080"/>
                        <input
                            type={"text"}
                            placeholder="nickname"
                        />
                    </div>
                    <div 
                        className="container-input"
                        onFocus={()=>setFocusInput(true)}
                        onBlur={()=>setFocusInput(false)}
                    >
                        {
                            focusInput ? <EnvelopeSimpleOpen weight="bold" size={24} color="#808080"/> : <EnvelopeSimple weight="bold" size={24} color="#808080"/>
                        }
                        
                        <input
                            type={"text"}
                            placeholder="email"
                        />
                    </div>
                    

                    
                    <div 
                        className="container-input"
                        onFocus={()=>setFocusInputPass(true)}
                        onBlur={()=>setFocusInputPass(false)}
                    >
                        <Lock weight={focusInputPass ? "fill" : "bold"} size={24} color="#808080"/>
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
            

                    <div 
                        className="container-input !p-0 !pr-10"
                    >
                        <Select.Root>
                            <Select.Trigger className="bg-pink-600 w-24 h-10 rounded-l-full flex justify-center items-center gap-2" aria-label="CodeWorld">
                                <Select.Value placeholder="+000" className="font-sora"/>
                                <Select.Icon>
                                    <CaretDown weight="bold"/>
                                </Select.Icon>
                            </Select.Trigger>

                            <Select.Portal>
                                <Select.Content className="bg-gray-800 px-2 py-4 overflow-hidden rounded-lg">
                                    <Select.ScrollUpButton className="flex justify-center text-white">
                                        <CaretUp size={24} weight="fill"/>
                                    </Select.ScrollUpButton>

                                    <Select.Viewport className="p-1">
                                        <Select.Group>
                                            <Select.Label className="text-center text-white font-bold font-sora">DDI</Select.Label>
                                            {
                                                numbers.map((number, key)=>{
                                                    return(
                                                        <Select.Item key={key} className="cursor-pointer p-1 hover:bg-pink-600 rounded-md text-center text-white" value={`${number}`}>
                                                            <Select.ItemText>
                                                                +{number}
                                                            </Select.ItemText>
                                                        </Select.Item>
                                                    )
                                                })
                                            }
                                        </Select.Group>
                                    </Select.Viewport>

                                    <Select.ScrollDownButton className="flex justify-center text-white">
                                        <CaretDown size={24} weight="fill"/>
                                    </Select.ScrollDownButton>
                                </Select.Content>
                            </Select.Portal>
                        </Select.Root>
                        <input
                            type={"text"}
                            placeholder="telefone"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-[#A21CAF] w-full flex justify-center items-center rounded-full py-3 text-3xl font-bold text-white mt-16 hover:bg-[#91169c]"
                    >
                        Sign up
                    </button>
                </form>

                <div className="mt-auto flex justify-center gap-10 font-sora">
                    <span className="text-white">
                        Already have an account?
                    </span>
                    <a onClick={()=>navigate("/login")} className="text-[#FD004C] font-bold cursor-pointer">Log in</a>
                </div>
            </main>
        </div>
    )
}