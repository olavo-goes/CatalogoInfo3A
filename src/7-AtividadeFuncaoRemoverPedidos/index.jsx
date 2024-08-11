// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`

import { useState } from "react";
export default function home(){
    const [listaProdutos, setProdutos] = useState([
        {id: 1, produto: 'batata', preco: '10 R$' },
        {id: 2, produto: 'banana', preco: '12 R$' },
        {id: 3, produto: 'beterraba', preco: '8.50 R$' },
        {id: 4, produto: 'melancia', preco: '19,50 R$' }
      ]);

    const [listaPedidos, setListaPedidos] = useState([])
    const adicionarItemPedidos = (objeto) =>{
        setListaPedidos = [...listaPedidos, objeto]




    }

    

    return (
        <div>
             <h1>Produtos Loja:</h1>
             {listaProdutos.map((produto) => 
              <div key={produto.id}>
              <h2>{nome}</h2>
              <h3>preco</h3>
              <button onClick={ () => adicionarItemPedidos(produto.id)}>X</button>
              </div>)}

             {
                listaPedidos.map((produto) => <div key={produto.id}>
                    <h2>{nome}</h2>
                    <h3>preco</h3>
                </div>)}
        </div>
    )
}