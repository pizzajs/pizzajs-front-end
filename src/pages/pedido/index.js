import React from 'react';
import './styles.css';

import { MdDelete } from "react-icons/md";
import Cabecalho from '../../utils/cabecalho/index';
import { useDispatch, useSelector } from 'react-redux';

export default function Pedido() {

    const bebidas = useSelector(state => state.pedido.bebidas)
    const pizzas = useSelector(state => state.pedido.pizzas)

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
                            </ul>
                        </div> 
                        <h1 className="valortotal">Valor total: 53,72</h1>
                    </span>
                    <span className="caixabebida">  
                        <div className="bebida">
                            <h1>Bebidas</h1>
                            <ul>
                                <li>coca-cola <MdDelete className="lixeira" /></li>                               
                            </ul>
                        </div>
                        <button className="redbotao">Finalizar pedido</button>
                    </span>
                </div>
            </div>
        </div>
    );
}