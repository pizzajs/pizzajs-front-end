import React from 'react';

import { MdDelete } from "react-icons/md";
import './styles.css';
import Cabecalho from '../cabecalho/index';

MdDelete
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
                                <li>minha pizza <MdDelete className="lixeira" /></li>
                                <li>calabresa <MdDelete className="lixeira" /></li>
                                <li>mussarela <MdDelete className="lixeira" /></li>
                                <li>minha pizza <MdDelete className="lixeira" /></li>
                                <li>calabresa <MdDelete className="lixeira" /></li>
                                <li>mussarela <MdDelete className="lixeira" /></li>
                                <li>minha pizza <MdDelete className="lixeira" /></li>
                                <li>calabresa <MdDelete className="lixeira" /></li>
                                <li>mussarela <MdDelete className="lixeira" /></li>
                                <li>minha pizza <MdDelete className="lixeira" /></li>
                                <li>calabresa <MdDelete className="lixeira" /></li>
                                <li>mussarela <MdDelete className="lixeira" /></li>
                                                   
                            </ul>
                        </div> 
                        <h1 className="valortotal">Valor total: 53,72</h1>
                    </span>
                    <span className="caixabebida">  
                        <div className="bebida">
                            <h1>Bebidas</h1>
                            <ul>
                                <li>coca-cola <MdDelete className="lixeira" /></li>
                                <li>guarana <MdDelete className="lixeira" /></li>
                                <li>fanta <MdDelete className="lixeira" /></li>
                                <li>coca-cola <MdDelete className="lixeira" /></li>
                                <li>guarana <MdDelete className="lixeira" /></li>
                                <li>fanta <MdDelete className="lixeira" /></li>
                                <li>coca-cola <MdDelete className="lixeira" /></li>
                                <li>guarana <MdDelete className="lixeira" /></li>
                                <li>fanta <MdDelete className="lixeira" /></li>
                                <li>coca-cola <MdDelete className="lixeira" /></li>
                                <li>guarana <MdDelete className="lixeira" /></li>
                                <li>fanta <MdDelete className="lixeira" /></li>                                
                            </ul>
                        </div>
                        <button className="redbotao">Finalizar pedido</button>
                    </span>
                </div>
            </div>
        </div>
    );
}