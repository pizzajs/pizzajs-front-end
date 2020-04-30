import React from  'react';

import './styles.css';
import Cabecalho from '../../utils/cabecalho/index';
import { MdArrowBack } from "react-icons/md";
import { Form, Input } from '@rocketseat/unform';

import api from '../../services/api';



export default function Cadastro() {
    
    async function Cadastrar(dados){
        // const headers={
        //     'Content-Type': 'application/json; charset=utf-8',
        //     'Access-Control-Allow-Origin': '*'
        // }

        if(dados.senha === dados.confirmarsenha) {
            // application/json;
            const data = {
                'nome': dados.nome,
                'senha': dados.senha,
                'endereco': dados.endereco,
                'email': dados.email,
                'telefone': dados.telefone,
                'admin': false
            };
            
            try {
                const response =  await api.post('/users',data);
            } catch (error) {
                alert('deu errado')
            }
        }else {
            alert('A digite senhas iguais!');
        }
        
        
        // api.post('cadastro', data)
    }

    return(
        <div >
            <div className="header">
                <Cabecalho />
            </div>
            <Form onSubmit={Cadastrar}className="cadastro">
                <div className="caixaprincipal">
                    <h1 className="titulo"> Pizza js</h1>
                    <Input name= "nome" type="text" placeholder="Nome" className="input"/>
                    <Input name="email" type="email" placeholder="E-mail" className="input"/>
                    <Input name= "telefone" type="text" placeholder="Telefone" className="input"/>
                    <Input name= "endereco" type="text" placeholder="Endereco" className="input"/>
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