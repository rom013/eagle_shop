import axios from "axios"
import { useEffect, useState } from "react"
import CardGame from "./CardGame"
import { CaretLeft, CaretRight } from "phosphor-react"
import { PlaceholderCarousel } from "./Placeholders"

interface typeProps {
    title: string
}

export default function CarouselSlider({ title }: typeProps) {
    const [games, setGames] = useState<any[]>([])
    const [position, setPosition] = useState(0)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [qnt, setQnt] = useState(4)

    const brackpoints = {
        ssm: '(min-width: 0px)', // 0 - 640
        sm: '(min-width: 600px)', // 0 - 640
        md: '(min-width: 768px)', // 641 - 768
        lg: '(min-width: 1024px)' // 769 - 1024
    }

    useEffect(() => {

        axios.get(`${import.meta.env.VITE_URL_SERVER}/game-list`)
            .then(e => {
                setGames(e.data)
            })
            .catch(e => {
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            }
            )
    }, [qnt])

    useEffect(() => {
        function handleResize() {
            Object.keys(brackpoints).forEach((key) => {
                const brackpoint = brackpoints[key];
                const isMath = window.matchMedia(brackpoint).matches;
                // console.log(window.matchMedia(brackpoint));
                
                if (isMath) {
                    // console.log(isMath, key);
                    
                    if(key === "ssm"){
                        setQnt(64)
                        setPosition(0)
                    }
                    else if(key === "sm"){
                        setQnt(4)
                        setPosition(0)
                    }
                    else if (key === "md" || key === "lg") {
                        setQnt(5)
                        setPosition(0)
                    }
                    else {
                        setQnt(4)
                        setPosition(0)
                    }
                }
            })
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <>

            {
                loading
                    ? <PlaceholderCarousel />
                    : (
                        <>
                            <div className="flex w-full items-center justify-between">
                                <h3 className="font-bold text-2xl">{title}</h3>
                                <div className={`flex w-20 justify-between ${qnt >= 64 && "hidden"}`}>
                                    <button
                                        className="bg-black/50 w-8 h-8 rounded-full flex justify-center items-center font-bold disabled:opacity-10 disabled:cursor-default"
                                        onClick={() => {
                                            setPosition(position - qnt)
                                        }}
                                        disabled={position <= 0 ? true : false}
                                    >
                                        <CaretLeft size={20} />
                                    </button>
                                    <button
                                        className="bg-black/50 w-8 h-8 rounded-full flex justify-center items-center font-bold disabled:opacity-10 disabled:cursor-default"
                                        onClick={() => {
                                            setPosition(position + qnt)
                                        }}
                                        disabled={position >= (games.length - qnt) ? true : false}
                                    >
                                        <CaretRight size={20} />
                                    </button>
                                </div>
                            </div>
                            <div className={`flex gap-4 h-[364px] ${error && "justify-center"} overflow-x-scroll sm:overflow-x-hidden carousel pb-2`}>
                                {
                                    error && (
                                        <h1 className="text-center">
                                            Ops!! <br /> Ocorreu um erro durante o carregamento. Tente novamente mais tarde. <br />
                                            <a className="text-violet-700 hover:underline" href="#">Suporte</a>
                                        </h1>
                                    )
                                }
                                {
                                    games.slice(position, (position + qnt)).map((e, key) => {
                                        return (
                                            <CardGame price={e.preco_jogo} nameGame={e.nome_jogo} img={e.url_img} key={key} />
                                        )
                                    })
                                }
                            </div>
                        </>
                    )
            }
        </>
    )
}