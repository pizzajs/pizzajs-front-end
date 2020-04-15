import React from 'react';

import Cabecalho from '../cabecalho';
import './styles.css';

export default function Bebida() {
    return (
        <div>
            <div className="cabecalho">
                <Cabecalho />
            </div>
            <div className="caixaesquerda">
                <h1 className="titulo">Bebidas</h1>
                <ul>
                    <li className="bebidas">Coca-cola</li>
                    <li className="bebidas">Guarana</li>
                    <li className="bebidas">Sprit</li>
                    <li className="bebidas">Fanta</li>
                </ul>
            </div>
            <div className="caixadireita">
                <h1 className="valor">Valor Total: R$ 72,38</h1>
                <button className="pizza">Adicionar pizza</button>
                <button className="finalizar">Finalizar Pedido</button>
            </div>
        </div>
    );
}