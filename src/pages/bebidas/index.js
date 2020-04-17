import React from 'react';

import Cabecalho from '../cabecalho';
import './styles.css';
import Checkbox from '../../utils/checkbox';

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
                        <li className="nomebebidas"> <Checkbox className="checkbox" Item="Coca-cola" /> </li>
                        <li className="nomebebidas"> <Checkbox Item="Guarana" /> </li>
                        <li className="nomebebidas"> <Checkbox Item="Sprit" /> </li>
                        <li className="nomebebidas"> <Checkbox Item="Fanta" /> </li>
                        <li className="nomebebidas"> <Checkbox Item="Coca-cola" /> </li>
                        <li className="nomebebidas"> <Checkbox Item="Guarana" /> </li>
                        <li className="nomebebidas"> <Checkbox Item="Sprit" /> </li>
                        <li className="nomebebidas"> <Checkbox Item="Fanta" /> </li>
                        <li className="nomebebidas"> <Checkbox Item="Coca-cola" /> </li>
                        <li className="nomebebidas"> <Checkbox Item="Guarana" /> </li>
                        <li className="nomebebidas"> <Checkbox Item="Sprit" /> </li>
                        <li className="nomebebidas"> <Checkbox Item="Fanta" /> </li>
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