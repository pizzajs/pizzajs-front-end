import React from 'react';

import {BrowserRouter, Route, Switch } from  'react-router-dom';

import Login from './pages/login';
import Cadastro from   './pages/cadastro';
import Pedido from './pages/pedido';
import Produto from './pages/produto';
import Pizza from './pages/pizza';
import Bebida from './pages/bebidas';
import Home from './pages/home';
import Pedidos from './pages/pedidos';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/pizza"  component={Pizza}/>
                <Route path="/cadastro"  component={Cadastro}/>
                <Route path="/pedido" component={Pedido} />
                <Route path="/produto"  component={Produto}/>
                <Route path="/bebida" component={Bebida} />
                <Route path="/home" component={Home} />
                <Route path="/pedidos" component={Pedidos} />

            </Switch>
        </BrowserRouter>
    );
}