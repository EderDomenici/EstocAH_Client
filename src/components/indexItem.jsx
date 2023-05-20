import { useApi } from "../hooks/useApi"

export function IndexItem(){
    const { data:product, isFetching } = useApi('https://estocah-production.up.railway.app/product/index')

    return(
        <body>
            <div className="container mx-auto gap-3">

                <h1 className="text-center text-5xl text-purple-600 font-semibold">Produtos</h1>

                <div className="flex flex-col gap-4 items-center">
                {product.map(product =>(
                    <div className="bg-slate-100 w-2/5 h-1/4 shadow-sm rounded-lg p-4 gap-4 flex flex-col">
                        <div className="flex justify-between">
                            <div className="flex gap-4">
                                <p className="text-gray-950 font-semibold">DESCRIÇÃO: </p>
                                <p className="text-black">{product.descricao}</p>

                            </div>
                            <div className="flex gap-4">
                                <p className="text-gray-950 font-semibold">ID: </p>
                                <p className="text-blue-600 font-bold">{product.id}</p>
                            </div>

                        </div>
                        <div className="flex justify-between">
                            <div className="flex gap-4">
                                <p className="text-gray-950 font-semibold">ESTOQUE:</p>
                                <p className="text-black">{product.estoque}</p>
                            </div>
                            <div className="flex gap-4">
                                <p className="text-gray-950 font-semibold">VALOR DE VENDA:</p>
                                <p className="text-black">{product.valorVenda}</p>
                            </div>

                        </div>

                    </div>
                ))}
                </div>
                


            </div>
        </body>
    )
}

/*{isFetching && <p>Carregando...</p>}
                    */

/*{product.map(product =>(
    <div className="bg-white w-2/4 h- flex gap-6 flex-col shadow-sm rounded-lg p-4" >
    <div className="flex justify-around">
        <p className="text-black">DESCRIÇÃO:</p>
        <p className="text-black">{product.descricao}</p>
        <p className="text-black">ID:</p>
        <p className="text-blue-600 font-bold">{product.id}</p> 
    </div>
    <div className="flex justify-around">
        
        
        
    </div>
</div>

 <div className="flex justify-between gap-2">
                            <p className="text-black">ESTOQUE:</p>
                            <p className="text-black">{product.estoque}</p>
                            <p className="text-black">VALOR DE VENDA:</p>
                            <p className="text-black">{product.valorVenda}</p>
                        </div>



*/