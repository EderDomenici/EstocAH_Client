import { useState } from "react";
import axios from "axios";


export function UpdatePrice(){
    const [idProd, setId] = useState('')
    const [nome, setNome] = useState('');
    const [valor,setvalorVenda] = useState('');


    function updateProduct(e){

        let id = null
        let descricao = null

        if(idProd){
            id = idProd
            descricao = null
        }

        if(nome){
            descricao = nome
            id = null
        }

        if(!valorVenda){
            alert('Valor não inserido!')
        }

        const valorVenda = parseFloat(valor);

        axios.put("https://estocah.onrender.com/product/update",{id,descricao,valorVenda})
        .then((response)=>{
            console.log(response)
            if(response.status === 201){
              alert('Preço Atualizado')
              setId('')
              setNome('')
              setvalorVenda('')
            }
          })
          .catch((error) => {
            console.error(error);
            alert('Ocorreu um erro ao cadastrar o produto');
          });

        e.preventDefault();
    }

    return(
        <div>
            <form onSubmit={updateProduct}>
                <input
                 type="text"
                 placeholder="Nome do Produto"
                 value={nome}
                 onChange={(e)=>setNome(e.target.value)}/>

                <input
                 type="number"
                 placeholder="Valor de Venda"
                 value={valor}
                 onChange={(e)=>setvalorVenda(e.target.value)}/>

                 <input
                 type={"number"}
                 placeholder="Id do Produto"
                 value={idProd}
                 onChange={(e)=>setId(e.target.value)}/>

                <button type="submit">Atualizar Preço</button>
            </form>

        </div>


    )


}