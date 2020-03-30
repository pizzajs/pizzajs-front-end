import React from 'react';

import styles from './styles.css';

export default function Login() {
    return(
        <div className="container" >
            <form className="form" onSubmit={()=>{}}>
                <input className="campo" type="text" placeholder="E-mail"/>
                <input className="campo" type="text" placeholder="Senha"/>
                <button className="botaoVermelho" onClick={()=>{}}>Entrar</button>
            </form>
        </div>
    );
}