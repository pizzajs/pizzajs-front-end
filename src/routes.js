import React from 'react';

import {BrowserRouter, Route, Switch } from  'react-router-dom';

import Login from './pages/login';
import Cabecalho from './pages/cabecalho/index.js';
import Cadastro from   './pages/cadastro';
import Pedido from './pages/pedido';
import Produto from './pages/produto';
import Bebida from './pages/bebidas';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/header"  component={Cabecalho}/>
                <Route path="/cadastro"  component={Cadastro}/>
                <Route path="/pedido" component={Pedido} />
                <Route path="/produto"  component={Produto}/>
                <Route path="/bebida" component={Bebida} />
            </Switch>
        </BrowserRouter>
    );
}