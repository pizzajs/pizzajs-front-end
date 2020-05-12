import React, {useEffect, useState} from 'react';

import Cabecalho from '../../utils/cabecalho';
import './styles.css';
import Checkbox from '../../utils/checkbox';

import api from '../../services/api'
export default function Bebida() {

    const [ bebidas, setBebidas] = useState([]);

    useEffect(() => {
        api.get('bebidas').then( res => {
            setBebidas(res.data)
            
        })
        
    }, [])


    return (
        <div>
            <div className="cabecalho">
                <Cabecalho />
            </div>
            <div className="caixabebidas">
                <div className="caixaesquerda">
                    <h1 className="titulobebida">Bebidas</h1>
                    <ul className="bebidas">
                        {bebidas.map( bebida => (
                            <li key={bebida.id} className="nomebebidas"> 
                                <Checkbox className="checkbox" Item={bebida.nome} />
                             </li>
                        ))}
                        
                        
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