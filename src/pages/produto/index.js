import React ,{useState, useEffect}from 'react';

import Cabecalho from '../../utils/cabecalho';
import imagem from '../../utils/dicionariodepizzas';
import { useDispatch } from 'react-redux';
import { AdicionarPizza } from '../../store/modules/pedido/action';

import './style.css';
<<<<<<< HEAD
export default function Produto (props) {
   //const response = props.location.state.sabor
   
   //    = api.get('pizzas');
   
   console.log(response);

   //console.log()
    // const response =["teste","teste2"];
=======
import Pedidos from '../pedidos';
export default function Produto (props) {
    const  produto= props.location.state;
    const dispatch = useDispatch();

    function adicionarAopedido(){
        dispatch(AdicionarPizza(produto));
        alert("adicionado com sucesso");
    }
>>>>>>> 545874346f8fa1a5a118b4b808134d2bbb65da73

    return(
        <div className="produto">
            <header className="header">
                <Cabecalho/>
            </header>
            <div className="produtoInfo">
                <h1>Pizza de {produto.sabor}</h1>
                <div className="info">
                    <div className="caixaEsquerda" >
                        <img className =" imagem"src={imagem[produto.sabor]}/>
                        <h1>Preço R$ {produto.preco}</h1>
                        
                    </div>
                    <div className="caixaDireita" >
                        <div className="ingredientes">
                        <h1>Ingredientes</h1>
                        <ul>
                            {produto.ingredientes_padrao.map(item=>(<li key={item}>{item}</li>))}

                        </ul>
                        </div>
                        <div className="itensBotoes">
                            <button onClick={() =>adicionarAopedido(produto)}>Adicionar ao pedido</button>
                            {/* <button>Modificar ingredientes</button>
                            <button>Remover do pedido</button> */}
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
        
    );
    

}
