import React from 'react'
import {  Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import {store} from './store';

export default function RouteWrapper({ component: Component, isPrivate = false, ... rest}) {
    
    const {logado , token} =  store.getState().auth;
    console.log('logado');
    console.log(logado);

    if(!logado && isPrivate){
        console.log('entrou 1');
        return <Redirect to="/" />;
    
    }

    if( logado && !isPrivate){
        console.log('entrou 2');
        return <Redirect to= "/home" />
        
    }

    return <Route {... rest} component={Component}/>
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouteWrapper.defaultProps = {
     isPrivate: false
 };