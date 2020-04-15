import React from  'react';

import './styles.css';
import Cabecalho from '../cabecalho/index';
import { MdArrowBack } from "react-icons/md";

export default function Cadastro() {
    return(
        <div className="cadastro">
            <div className="header">
                <Cabecalho />
            </div>
            <div className="caixaprincipal">
                <h1>Pizza js</h1>
                <input type="text" placeholder="Nome"/>
                <input type="email" placeholder="E-mail"/>
                <input type="tel" placeholder="Telefone"/>
                <input type="password" placeholder="Senha"/>
                <input type="password" placeholder="Confirmar Senha"/>
                <button>Cadastrar</button>
                <MdArrowBack />
            </div>
        </div>
    );
}