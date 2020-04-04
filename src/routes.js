import React from 'react';

import {BrowserRouter, Route, Switch } from  'react-router-dom';

import Login from './pages/login';
import Cabecalho from './pages/cabecalho/index.js';
import Cadastro from   './pages/cadastro';
import Pedido from './pages/pedido';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/header"  component={Cabecalho}/>
                <Route path="/cadastro"  component={Cadastro}/>
                <Route path="/pedido" component={Pedido} />
            </Switch>
        </BrowserRouter>
    );
}