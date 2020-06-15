import React from 'react';

import Cabecalho from '../../utils/cabecalho';
import imgPizza from '../../assets/pizza.jpg';
import api from '../../services/api';
import './style.css';
export default function Produto (props) {
   //const response = props.location.state.sabor
   
   //    = api.get('pizzas');
   
   console.log(response);

   //console.log()
    // const response =["teste","teste2"];

    return(
        <div className="produto">
            <header className="header">
                <Cabecalho/>
            </header>
            <div className="produtoInfo">
                <h1>Pizza de Calabresa</h1>
                <div className="info">
                    <div className="caixaEsquerda" >
                        <img className =" imagem"src={imgPizza}/>
                        <h1>Preço R$ 35,00</h1>
                        <button>Adicionar ao pedido</button>
                    </div>
                    <div className="caixaDireita" >
                        <div className="ingredientes">
                        <h1>Ingredientes</h1>
                        <ul>
                            {/* { response.map(pizza => <li key={pizza.id}>{pizza}</li>)
                            } */}
                            {/* <li>Cebola</li>
                            <li>Cebola</li>
                            <li>Cebola</li>
                            <li>Cebola</li>
                            <li>Cebola</li>
                            <li>Cebola</li>
                            <li>Cebola</li>
                            <li>Cebola</li>
                            <li>Cebola</li>
                            <li>Cebola</li>
                            <li>Cebola</li>
                            <li>Cebola</li>
                            <li>Cebola</li>
                            <li>Cebola</li>
                            <li>Cebola</li>
                            <li>Cebola</li> */}

                        </ul>
                        </div>
                        <div className="itensBotoes">
                            <button>Modificar ingredientes</button>
                            <button>Remover do pedido</button>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
        
    );
    

}
