import React from  'react';

import './styles.css';
import Cabecalho from '../../utils/cabecalho/index';
import { MdArrowBack } from "react-icons/md";
import { Form, Input } from '@rocketseat/unform';

export default function Cadastro() {
    function dadosCadastro(dados){
        console.log(dados);
    }

    return(
        <div >
            <div className="header">
                <Cabecalho />
            </div>
            <Form onSubmit={dadosCadastro}className="cadastro">
                <div className="caixaprincipal">
                    <h1 className="titulo"> Pizza js</h1>
                    <Input name= "Nome" type="text" placeholder="Nome" className="input"/>
                    <Input name="email" type="email" placeholder="E-mail" className="input"/>
                    <Input name= "telefone" type="tel" placeholder="Telefone" className="input"/>
                    <Input name= "senha" type="password" placeholder="Senha" className="input"/>
                    <Input name= "confirmarsenha" type="password" placeholder="Confirmar Senha" className="input"/>
                    <button className="botaovermelho">Cadastrar</button>
                    <div>
                        <MdArrowBack className="iconevoltar"/>
                    </div>
                </div>
            </Form>
        </div>
    );
}