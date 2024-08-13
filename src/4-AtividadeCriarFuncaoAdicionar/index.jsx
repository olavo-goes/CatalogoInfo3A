// Crie o estado `listaPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `objeto`.
// Dentro da função, utilize `setListaPedidos` para adicionar o `objeto` à `listaPedidos`.
// Exemplo: `setListaPedidos([...listaPedidos, objeto]);`

import { useState } from "react";
export default function Home(){
    const [listaProdutos, setProdutos] = useState([
        {id: 1, produto: "batata", preco: "10 R$" },
        {id: 2, produto: "banana", preco: "12 R$" },
        {id: 3, produto: "beterraba", preco: "8.50 R$" },
        {id: 4, produto: "melancia", preco: "19,50 R$" }
      ]);

    const [listaPedidos, setListaPedidos] = useState([])
    const adicionarItemPedidos = (objeto) => {
        setListaPedidos([...listaPedidos, objeto])
    }

    return (
        <div>
             <h1>Produtos Loja:</h1>
             {listaProdutos.map((produto) => 
              <div key={produto.id}>
              <p>{produto.produto}</p>
              <p>{produto.preco}</p>
              </div>)}
        </div>)
  }

