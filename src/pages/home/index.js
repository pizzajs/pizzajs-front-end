import React, { useEffect, useState } from 'react';

import './styles.css';
import Cabecalho from '../../utils/cabecalho/index';
import imgPizza from '../../assets/pizza.jpg';
import api from '../../services/api';
import history from '../../services/history';


export default function Home() {
    
    const [pizzas, setPizzas] = useState([])
    
    useEffect(() => {
        api.get('pizzas').then( res => {
            setPizzas(res.data)
        })

    },[])

    function montarPizza() {
        history.push('/pizza')
    }

    function escolherbebida() {
        history.push('/bebida')
    }

    return(
        <div>
            <Cabecalho />
            <div className="paginainicial">
                <div className="navegacao">
                    <h1 onClick={montarPizza} className="montarpizza">Montar Pizza</h1>
                    <h1 onClick={escolherbebida}className="escolherbebida">Bebidas</h1>
                </div>
                <div className="pizzasprontas">
                    {   
                        pizzas.map( pizza => (
                            <div key={pizza.id}className="caixapizza">
                                <h1 className="nomepizza">{pizza.sabor}</h1>
                                <img className ="imagem"src={imgPizza}/>
                            </div>
                        ))
                    }
                </div> 
            </div>
        </div>
    );
}