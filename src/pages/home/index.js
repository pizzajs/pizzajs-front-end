import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './styles.css';
import Cabecalho from '../../utils/cabecalho/index';
import api from '../../services/api';
import history from '../../services/history';
import { signOutRequest } from '../../store/modules/auth/action';
import imagem from '../../utils/dicionariodepizzas'


export default function Home() {
    
    const [pizzas, setPizzas] = useState([]);

    
    const dispatch = useDispatch(); 
    
    useEffect(() => {
        async function getPizzas(){
            try {
                const response =  await api.get('pizzas');
                setPizzas(response.data);
            }
            catch(error){
                
                if(error.response.status == 401){
                    alert('Sessão expirada!');
                    dispatch(signOutRequest());
                }
            }

        }
       
        getPizzas();
        
    },[]);
    
   

 
    function montarPizza() {
        history.push('/pizza')
    }

    function escolherbebida() {
        history.push('/bebida')
    }

    function maisdetalhes(pizza) {
        history.push('/produto', pizza )
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
                            <div key={pizza.id} onClick={() => maisdetalhes(pizza)} className="caixapizza">
                                <h1  className="nomepizza">{pizza.sabor}</h1>
                                <img className ="imagem"src={imagem[pizza.sabor]}/>           
                            </div>
                        ))
                    }
                </div> 
            </div>
        </div>
    );
}