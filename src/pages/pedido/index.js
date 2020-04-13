import React from 'react';


import './styles.css';
import Cabecalho from '../cabecalho/index'

export default function Pedido() {

    return (    
        <div className="produto">
            <div className="header">
                <Cabecalho />
            </div>      
            <div className = "caixaPricipal">
                <h1 className="titulo">Meu Pedido</h1>
                <div className="caixas">
                    <span className="caixapizza">
                       
                        <div className="pizzas">
                            <h1>Pizzas</h1>
                            <ul>
                                <li>minha pizza</li>
                                <li>calabresa</li>
                                <li>mussarela</li>
                                <li>minha pizza</li>
                                <li>calabresa</li>
                                <li>mussarela</li>  
                                <li>minha pizza</li>
                                <li>calabresa</li>
                                <li>mussarela</li>  
                                <li>minha pizza</li>
                                <li>calabresa</li>
                                <li>mussarela</li>  
                                <li>minha pizza</li>
                                <li>calabresa</li>
                                <li>mussarela</li>                        
                            </ul>
                        </div> 
                        <h1 className="valortotal">Valor total: 53,72</h1>
                    </span>
                    <span className="caixabebida">  
                        <div className="bebida">
                            <h1>Bebidas</h1>
                            <ul>
                                <li>coca-cola</li>
                                <li>guarana</li>
                                <li>fanta</li>
                                <li>coca-cola</li>
                                <li>guarana</li>
                                <li>fanta</li>
                                <li>coca-cola</li>
                                <li>guarana</li>
                                <li>fanta</li>
                                <li>coca-cola</li>
                                <li>guarana</li>
                                <li>fanta</li>
                                <li>coca-cola</li>
                                <li>guarana</li>
                                <li>fanta</li>
                                <li>coca-cola</li>
                                <li>guarana</li>
                                <li>fanta</li>
                                <li>coca-cola</li>
                                <li>guarana</li>
                                <li>fanta</li>
                            </ul>
                        </div>
                        <button className="redbotao">Finalizar pedido</button>
                    </span>
                </div>
            </div>
        </div>
    );
}