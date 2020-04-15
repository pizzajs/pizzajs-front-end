import React from  'react';

import './styles.css';
import Cabecalho from '../cabecalho/index';
import { MdArrowBack } from "react-icons/md";

export default function Cadastro() {
    return(
        <div >
            <div className="header">
                <Cabecalho />
            </div>
            <div className="cadastro">
                <div className="caixaprincipal">
                    <h1 className="titulo"> Pizza js</h1>
                    <input type="text" placeholder="Nome" className="input"/>
                    <input type="email" placeholder="E-mail" className="input"/>
                    <input type="tel" placeholder="Telefone" className="input"/>
                    <input type="password" placeholder="Senha" className="input"/>
                    <input type="password" placeholder="Confirmar Senha" className="input"/>
                    <button className="botaovermelho">Cadastrar</button>
                    <div>
                    <MdArrowBack className="iconevoltar"/>
                    </div>
                </div>
            </div>
        </div>
    );
}