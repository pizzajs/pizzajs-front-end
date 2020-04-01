import React from 'react';

import {BrowserRouter, Route, Switch } from  'react-router-dom';

import Login from './pages/login';
import Cabecalho from './pages/cabecalho/index.js';


export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/header"  component={Cabecalho}/>
            </Switch>
        </BrowserRouter>
    );
}