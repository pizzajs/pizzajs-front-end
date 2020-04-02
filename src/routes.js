import React from 'react';

import {BrowserRouter, Route, Switch } from  'react-router-dom';

import Login from './pages/login';
import Cabecalho from './pages/cabecalho/index.js';
import Cadastro from   './pages/cadastro';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/header"  component={Cabecalho}/>
                <Route path="/cadastro"  component={Cadastro}/>
            </Switch>
        </BrowserRouter>
    );
}