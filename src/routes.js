import React from 'react';

import {BrowserRouter, Switch } from  'react-router-dom';

import RouteWrapper from './Route';

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
                <RouteWrapper path="/" exact component={Login} />
                <RouteWrapper path="/pizza"  component={Pizza} isPrivate/>
                <RouteWrapper path="/cadastro"  component={Cadastro} />
                <RouteWrapper path="/pedido" component={Pedido} isPrivate/>
                <RouteWrapper path="/produto"  component={Produto} isPrivate/>
                <RouteWrapper path="/bebida" component={Bebida} isPrivate/>
                <RouteWrapper path="/home" component={Home} isPrivate/>
                <RouteWrapper path="/pedidos" component={Pedidos} isPrivate/>
            </Switch>
        </BrowserRouter>
    );
}