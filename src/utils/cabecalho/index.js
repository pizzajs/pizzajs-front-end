import React from 'react';  
import './styles.css'; 
import logoImg from '../../assets/logo.png';
import { MdExitToApp, MdShoppingCart } from "react-icons/md";
import {signOutRequest} from '../../store/modules/auth/action';
import { useDispatch } from 'react-redux';

import history from '../../services/history';

export default function Cabecalho(){
    
    const dispatch = useDispatch();

    function sair(){
        dispatch(signOutRequest());
    }

    function carrinho() {
        history.push('/pedido');
    }

    function Home() {
        history.push('/home');
    }

    return (         
        <header className="cabecalho">
            <div>                 
                <img src={logoImg} onClick={Home}/>                 
                <h1 onClick={Home}>Pizza Js</h1>
                <MdShoppingCart className="carrinho" onClick={carrinho} size={50}/>
                <MdExitToApp className="botaoSair" onClick={sair} size={50}/>          
            </div>         
        </header>     
    ); 
}