import React from 'react';
import {Link} from 'react-router-dom';
// import {FiLogIn} from 'react-icons/fi';

import Cabecalho from '../cabecalho';
import './styles.css';

export default function Login() {
    return(
       <div className="containerLogin">
           <form className="formulario">
                <h1>Pizza Js</h1>
                <h1>Login</h1>
                <input type="text" placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>
                <button>Entrar</button>
                <Link to="/">Não tenho cadastro</Link>
           </form>

       </div>
    );
}