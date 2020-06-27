import React, { useEffect, useState } from 'react';
import './styles.css';

import { MdDelete } from "react-icons/md";
import Cabecalho from '../../utils/cabecalho/index';
import { useDispatch, useSelector } from 'react-redux';
import { RemoverBebida, DeletarPizzaCustomizada, RemoverPizza } from '../../store/modules/pedido/action';
import api from '../../services/api';
export default function Pedido() {
    
    const dispatch = useDispatch();
    
    const {pizzas,pizzas_customizadas, bebidas, preco} = useSelector(state => state.pedido)
    const valorpedido = preco;
    const [bebidasCadastradas, setBebidasCadastradas] = useState([]);
   
    
    

    useEffect(() => {
        console.log(bebidas)

        
    }, [])

    function RenderPizzas(){

        let aux =[];
        for( var pizza in pizzas){
            aux.push( 
                <div key={pizza}>
                    
                    <ul>
                        <li><h2>Sabor: {pizzas[pizza].sabor}</h2><MdDelete size={25} className="lixeira" color="#ED0000" onClick={()=>deletarPizza(pizza)}/></li>
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

    function deletPizzaCustom(nomePizza){
        dispatch(DeletarPizzaCustomizada(nomePizza));
        alert("Pizza deletada!");

    }
    function deletarPizza(id){
        dispatch(RemoverPizza(id));
        alert("Pizza deletada!");
    }

    
    function RenderPizzasCustomizadas(){
        let aux =[];
    
        for( var pizza in pizzas_customizadas){
            let recheioAux = [];
            if(pizzas_customizadas[pizza].recheio.length !== 0){
                for(var rec in pizzas_customizadas[pizza].recheio){
                    recheioAux.push(
                        <li key={rec}>
                            <h3>- {pizzas_customizadas[pizza].recheio[rec].quantidade}x {pizzas_customizadas[pizza].recheio[rec].sabor} </h3>
                        </li>);
                }

            }
            
            aux.push( 
                <div key={pizza}>
                    
                    <ul>
                        <li><h2>Sabor: {pizza}</h2> <MdDelete size={25} className="lixeira" color="#ED0000" onClick={()=>deletPizzaCustom(pizza)}/></li>
                        <li><h2>- 1x {pizzas_customizadas[pizza].massa}</h2></li>
                        <li><h2>- 1x {pizzas_customizadas[pizza].borda}</h2></li>
                        {recheioAux}
                        <li><h2>Preço: R$ {pizzas_customizadas[pizza].valor.toFixed(2) }</h2></li>

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
                        
                        <h1 className="valortotal">Valor total: R$ {valorpedido.toFixed(2)} </h1>
                    </span>
                    <span className="caixabebida">  
                        <div className="bebida">
                            <h1>Bebidas</h1>
                            <ul>
                                {/* {bebidas.map((bebida, index=0) => (
                                    <li key={bebida.id}> {bebida.nome} <MdDelete className="lixeira" onClick={() => deletarbebida(index++, bebida.preco)}/></li>
                                ))}                                     */}
                            </ul>
                        </div>
                        <button className="redbotao">Finalizar pedido</button>
                    </span>
                </div>
            </div>
        </div>
    );
}