import React from 'react';
import {Link} from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import {useDispatch} from 'react-redux';


import './styles.css';

export default function Login() {
    function dadosLogin(dados){
        console.log(dados)
    }
    
    const dispatch = useDispatch()
    
    return(
       <div className="containerLogin">
           <Form onSubmit={dadosLogin} className="formulario">
                <h1 className="tituloLogin">Pizza Js</h1>
                <h1 className="tituloLogin">Login</h1>
                <Input name="email" className="camposLogin" type="text" placeholder="E-mail"/>
                <Input name="senha" className="camposLogin" type="password" placeholder="Senha"/>
                <button className="botao" >Entrar</button>
                <Link to="/">Não tenho cadastro</Link>
           </Form>
       </div>
    );
}