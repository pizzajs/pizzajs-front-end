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
                <h1>Meu Pedido</h1>
                <div className="caixapizza">
                    <div className="pizzas">
                        <h1>Pizzas</h1>
                        <ul>
                            <li>minha pizza</li>
                            <li>calabresa</li>
                            <li>mussarela</li>
                        </ul>
                        <h1>valor total</h1>
                    </div>
                </div>
                <div className="caixabebida">
                    <div className="bebida">
                        <h1>Bebidas</h1>
                        <ul>
                            <li>coca-cola</li>
                            <li>guarana</li>
                            <li>fanta</li>
                        </ul>
                        <button className="redbotao">Finalizar pedido</button>
                    </div>
                </div>
            </div>
        </div>
    );
}