import React from 'react';

import Cabecalho from '../cabecalho';
import './styles.css';

export default function Bebida() {
    return (
        <div>
            <div className="cabecalho">
                <Cabecalho />
            </div>
            <div className="bebida">
                <div className="caixaesquerda">
                    <h1 className="titulo">Bebidas</h1>
                    <ul className="bebidas">
                        <li className="nomebebidas">Coca-cola</li>
                        <li className="nomebebidas">Guarana</li>
                        <li className="nomebebidas">Sprit</li>
                        <li className="nomebebidas">Fanta</li>
                        <li className="nomebebidas">Coca-cola</li>
                        <li className="nomebebidas">Guarana</li>
                        <li className="nomebebidas">Sprit</li>
                        <li className="nomebebidas">Fanta</li>
                        <li className="nomebebidas">Coca-cola</li>
                        <li className="nomebebidas">Guarana</li>
                        <li className="nomebebidas">Sprit</li>
                        <li className="nomebebidas">Fanta</li>
                    </ul>
                </div>
                <div className="caixadireita">
                    <h1 className="valor">Valor Total: R$ 72,38</h1>
                    <div className="botoes">
                        <button className="botaopizza">Adicionar pizza</button>
                        <button className="botaofinalizar">Finalizar Pedido</button>
                    </div>
                </div>
            </div>
        </div>
    );
}