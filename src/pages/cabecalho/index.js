import React from 'react';

import './styles.css';
import logoImg from '../../assets/logo.png';

export default function Cabecalho(){
    return (
        <header className="cabecalho">
            <div>
                <img src={logoImg}/>
                <h1>Pizza Js</h1>
            </div>
        </header>
    );
}