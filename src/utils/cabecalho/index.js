import React from 'react';  
import './styles.css'; 
import logoImg from '../../assets/logo.png';
import { MdExitToApp } from "react-icons/md";
import {signOutRequest} from '../../store/modules/auth/action';
import { useDispatch } from 'react-redux';

export default function Cabecalho(){
    
    const dispatch = useDispatch();

    function sair(){
        dispatch(signOutRequest());
    }
    return (         
        <header className="cabecalho">
            <div>                 
                <img src={logoImg}/>                 
                <h1>Pizza Js</h1>
                <MdExitToApp className="botaoSair" onClick={sair} size={50}/>          
            </div>         
        </header>     
    ); 
}