// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaPedidos`
// dentro desse `<div>`.

import { useState } from "react";
export default function home(){
    const [listaProdutos, setProdutos] = useState([
        {id: 1, produto: "batata", preco: "10 R$" },
        {id: 2, produto: "banana", preco: "12 R$" },
        {id: 3, produto: "beterraba", preco: "8.50 R$" },
        {id: 4, produto: "melancia", preco: "19,50 R$" }
      ]);

    const [listaPedidos, setListaPedidos] = useState([])
    const adicionarItemPedidos = (objeto) =>{
        setListaPedidos([...listaPedidos, objeto])
    }

    return (
        <div>
             <h1>Produtos Loja:</h1>
             {listaProdutos.map((produto) => 
              <div key={produto.id}>
              <p>{produto.nome}</p>
              <p>{produto.preco}</p>
              <button onClick={ () => adicionarItemPedidos(produto)}>Selecionar</button>
              </div>)}

             {
                listaPedidos.map((produto) => <div key={produto}>
               <p>{produto.nome}</p>
               <p>{produto.preco}</p>
               <button onClick={ () => adicionarItemPedidos(produto)}>Selecionar</button>
                </div>)}
        </div>
    )
}