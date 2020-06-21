import React, { useEffect, useState } from 'react';
import './styles.css';

import { MdDelete } from "react-icons/md";
import Cabecalho from '../../utils/cabecalho/index';
import { useDispatch, useSelector } from 'react-redux';
import { RemoverBebida } from '../../store/modules/pedido/action';

export default function Pedido() {
    
    const dispatch = useDispatch();
    
    const {pizzas,pizzas_customizadas, bebidas, preco} = useSelector(state => state.pedido)
    const valorpedido = preco;
    

   
    function RenderPizzas(){
        let aux =[];
        for( var pizza in pizzas){
            aux.push( 
                <div key={pizza}>
                    
                    <ul>
                     <li><h2>Sabor: {pizzas[pizza].sabor}</h2></li>
                        {pizzas[pizza].ingredientes.map(ingrediente =>(
                            <li key={ingrediente}><h3>- {ingrediente}</h3></li>
                        ))}
                        <li> <h2>Preço: R$ {pizzas[pizza].valor }</h2></li>

                    </ul>

                </div>
                
            );
            
        }
        return aux;
    }

    
    function RenderPizzasCustomizadas(){
        let aux =[];
    
        for( var pizza in pizzas_customizadas){
            let recheio = [];
            for(var rec in pizzas_customizadas[pizza].ingredientes){
                recheio.push(<li key={rec}>- {pizzas_customizadas[pizza].ingredientes[rec].sabor}</li>);
            }
            aux.push( 
                <div key={pizza}>
                    
                    <ul>
                        <li><h2>Sabor: {pizza}</h2></li>
                        {recheio}
                        <li><h2>Preço: R$ {pizzas_customizadas[pizza].valor }</h2></li>

                    </ul>
                </div>
                
            );
            
        }
        return aux;
    }

    async function deletarbebida(index, valor) {
        await dispatch(RemoverBebida(index, valor));
    }



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
                        
                                <RenderPizzas/>   
                                <RenderPizzasCustomizadas/> 
                                                                             
                        </div> 
                        
                        <h1 className="valortotal">Valor total: R$ {valorpedido} </h1>
                    </span>
                    <span className="caixabebida">  
                        <div className="bebida">
                            <h1>Bebidas</h1>
                            <ul>
                                {bebidas.map((bebida, index=0) => (
                                    <li key={bebida.id}> {bebida.nome} <MdDelete className="lixeira" onClick={() => deletarbebida(index++, bebida.preco)}/></li>
                                ))}                                    
                            </ul>
                        </div>
                        <button className="redbotao">Finalizar pedido</button>
                    </span>
                </div>
            </div>
        </div>
    );
}