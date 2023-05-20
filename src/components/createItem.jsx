import { useState } from "react";
import axios from "axios";

export function CreateItem(){
    const [descricao, setdescricao] = useState('');
    const [valor,setvalorVenda] = useState('');


    function createProduct(e){

        if(!descricao){
            alert('Descrição esta vazia ou invalida confira!')
            setdescricao('')
        }

        const valorVenda = !valor ? null : parseFloat(valor);

        axios.post("https://estocah.onrender.com/product/create",{descricao,valorVenda})
        .then((response)=>{
          console.log(response)
          if(response.status === 201){
            alert('Produto Cadastrado')
            setdescricao('')
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
            <form onSubmit={createProduct}>
                <input
                 type="text"
                 placeholder="Nome do Produto"
                 value={descricao}
                 onChange={(e)=>setdescricao(e.target.value)}/>

                <input
                 type="number"
                 placeholder="Valor de Venda"
                 value={valor}
                 onChange={(e)=>setvalorVenda(e.target.value)}/>

                <button type="submit">Cadastrar Produto</button>
            </form>

        </div>
    )
}