import React from 'react';
import {Link} from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import {useDispatch} from 'react-redux';

import {loginRequest} from '../../store/modules/auth/action'

import './styles.css';

export default function Login() {
    const dispatch = useDispatch();

    function dadosLogin({email, senha}){
        dispatch(loginRequest(email, senha));
    }
    
    
    
    return(
       <div className="containerLogin">
           <Form onSubmit={dadosLogin} className="formulario">
                <h1 className="tituloLogin">Pizza Js</h1>
                <h1 className="tituloLogin">Login</h1>
                <Input name="email" className="camposLogin" type="text" placeholder="E-mail"/>
                <Input name="senha" className="camposLogin" type="password" placeholder="Senha"/>
                <button type="submit" className="botao">Entrar</button>
                <Link to="/">Não tenho cadastro</Link>
           </Form>
       </div>
    );
}