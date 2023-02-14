interface values{
    nameGame: String,
    price: number,
    img: string
}

export default function CardGame({img,nameGame,price}:values){   

    return(
        <div className="p-1 w-44 h-full flex flex-col rounded ">
            <img src={`http://localhost:9999${img}`} alt="" className="object-cover w-full h-56 rounded"/>
            <div className="flex flex-col gap-2 mb-6 mt-2">
                <span className="uppercase text-xs font-medium">{nameGame}</span>
                <span className="text-lg font-semibold">{price == 0 ? "Grátis" : `R$ ${price.toFixed(2).toString().replace(".", ",")}`}</span>
            </div>

            <button className="bg-violet-900 w-full py-1 rounded font-semibold text-xs hover:bg-violet-800 transition justify-self-end mt-auto">
                Adicionar ao carrinho
            </button>
        </div>
    )
}