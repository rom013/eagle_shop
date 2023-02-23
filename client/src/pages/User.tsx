import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header"
import UserProfilePicture from "../components/UserProfilePicture";
import axios from "axios";
import { SignOutList } from "../components/Signout";


export default function User(){
    const [keyUserData, setKeyUserData] = useState<Array<string>>([])
    const [valueUserData, setValueUserData] = useState<Array<string>>([])


    const jwtToken = localStorage.authorizationUser
    const parseJwt = (token:string) => {
        try {
            return JSON.parse(atob(token.split('.')[1]))
        } catch (e) {
            return 0;
        }
    };

    useEffect(()=>{
		const option = {
			method: "GET",
			url: `${import.meta.env.VITE_URL_SERVER}/profile/${parseJwt(jwtToken).id}`,
			headers: {
				Authorization: `Bearer ${jwtToken}`
			}
		}
		axios(option)
			.then((e)=>{
                const {email_user: email, cell_user: cell, nome_user: nome, nick_user:nick } = e.data.data[0]
                setKeyUserData(Object.keys({email, cell, nome, nick}))
                setValueUserData([email, cell, nome, nick])
			})
			.catch(e=>{
                console.log(e);  
			})
    },[])
    return(
        <>
            <Header/>

            <main
                className="flex max-w-5xl mx-28 px-8 my-16 gap-20"
            >
                <section className="text-white flex flex-col items-center gap-8">
                    <UserProfilePicture nameUser={valueUserData[3]}/>

                    <ul className="text-white flex flex-col gap-2">
                        <li>
                            <button className="link after:bg-violet-600">Security and privacy</button>
                        </li>
                        <li>
                            <button className="link after:bg-violet-600">Alter password</button>
                        </li>
                        <li>
                            <button className="link after:bg-violet-600">Settings</button>
                        </li>
                        <li>
                            <button className="link after:bg-violet-600">Help</button>
                        </li>
                        <li>
                            <SignOutList/>
                        </li>
                    </ul>
                </section>
                <section className="max-w-[564px] w-full ">
                    <h2 className="text-[#808080] text-2xl font-semibold">User data</h2>

                    <div className="mt-8">
                        <ul className="flex flex-col gap-6 w-full">
                            <li className="flex justify-between gap-4">
                                <strong className="text-white font-bold">ID</strong>
                                <div className="bg-violet-900 py-1 px-4 rounded text-white w-80 font-sora text-xs selection:bg-violet-500">{parseJwt(jwtToken).id}</div>
                            </li>

                            {
                                keyUserData.map((data, index)=>{
                                    return(
                                        <li className={`flex justify-between gap-4 ${index === 3 && "hidden"}`} key={index}>
                                            <strong className="text-white font-bold capitalize">{data}</strong>
                                            <div className="bg-violet-900 py-1 px-4 rounded text-white w-80 font-sora text-xs selection:bg-violet-500 leading-relaxed">{valueUserData[index]}</div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </section>
            </main>

            <Footer/>
        </>
    )
}