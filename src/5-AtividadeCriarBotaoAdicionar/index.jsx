// Para cada objeto renderizado, adicione um botão.
// Utilize o atributo onClick para o botão.
// No valor do onClick, passe a função adicionarItemPedidos, 
// por exemplo: onClick={() => adicionarItemPedidos(produto)}
// No conteúdo do botão, coloque o texto "Selecionar" ou algo semelhante.
 
import { useState } from "react";
export default function Home(){
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
              <p>{produto.produto}</p>
              <p>{produto.preco}</p>
              <button onClick={ () => adicionarItemPedidos(produto)}>Selecionar</button>
              </div>)}
        </div>)
  }
