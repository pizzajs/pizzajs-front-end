import React from 'react';
import {Link} from 'react-router-dom';


import './styles.css';

export default function Login() {
    return(
       <div className="containerLogin">
           <form className="formulario">
                <h1 className="tituloLogin">Pizza Js</h1>
                <h1 className="tituloLogin">Login</h1>
                <input className="camposLogin" type="text" placeholder="E-mail"/>
                <input className="camposLogin" type="password" placeholder="Senha"/>
                <button className="botao">Entrar</button>
                <Link to="/">Não tenho cadastro</Link>
           </form>

       </div>
    );
}