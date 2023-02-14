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

    useEffect(() => {
        axios.get('http://localhost:9999/game-list')
            .then(e => {
                console.log(e.status);
                setGames(e.data)
            })
            .catch(e => {
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            }
        )

    }, [])

    return (
        <>
            
            {
                loading ? <PlaceholderCarousel/>
                    : (
                        <>
                            <div className="flex w-full items-center justify-between">
                                <h3 className="font-bold text-2xl">{title}</h3>
                                <div className="flex w-20 justify-between">
                                    <button
                                        className="bg-black/50 w-8 h-8 rounded-full flex justify-center items-center font-bold disabled:opacity-10 disabled:cursor-default"
                                        onClick={() => {
                                            setPosition(position - 5)
                                        }}
                                        disabled={position <= 0 ? true : false}
                                    >
                                        <CaretLeft size={20} />
                                    </button>
                                    <button
                                        className="bg-black/50 w-8 h-8 rounded-full flex justify-center items-center font-bold disabled:opacity-10 disabled:cursor-default"
                                        onClick={() => {
                                            setPosition(position + 5)
                                        }}
                                        disabled={position >= (games.length - 5) ? true : false}
                                    >
                                        <CaretRight size={20} />
                                    </button>
                                </div>
                            </div>
                            <div className={`flex gap-4 h-[364px] ${error && "justify-center"}`}>
                                {
                                    error && (
                                        <h1 className="text-center">
                                            Ops!! <br/> Ocorreu um erro durante o carregamento. Tente novamente mais tarde. <br/> 
                                            <a className="text-violet-700 hover:underline" href="#">Suporte</a>
                                        </h1>
                                    )
                                }
                                {
                                    games.slice(position, (position + 5)).map((e, key) => {
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