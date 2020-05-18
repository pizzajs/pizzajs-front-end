import React, {useEffect, useState} from 'react';

import Cabecalho from '../../utils/cabecalho';
import './styles.css';

import { AdicionarBebida } from '../../store/modules/pedido/action'

import api from '../../services/api';
import { useDispatch } from 'react-redux';
import history from '../../services/history';

export default function Bebida() {

    const [ bebidas, setBebidas] = useState([]);
    const dispatch = useDispatch();

    let item = []
    

    useEffect(() => {
        api.get('bebidas').then( res => {
            setBebidas(res.data)
            
        })
        
    }, [])

    function adicionacarrinho() {
        dispatch(AdicionarBebida(item));
        history.push('/pedido')
    }

    function adicionacarrinhocontinuarcomprando() {
        dispatch(AdicionarBebida(item));
        history.push('/home')
    }

    function adicionabebida(bebida) {
        if(item.find(beb => beb == bebida)) {
            const posicao = item.indexOf(bebida)
            item.splice(posicao, 1)
        }else {
            item.push(bebida)
        }
 
     }


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
                                <label className="container">{bebida.nome}
                                    <input type="checkbox" value={bebida} onClick={() => adicionabebida(bebida.nome)} />
                                    <span className="checkmark"></span>
                                </label>
                             </li>
                        ))} 
                    </ul>
                </div>
                <div className="caixadireita">
                    <h1 className="valor">Valor Total: R$ 72,38</h1>
                    <div className="botoes">
                        <button onClick={adicionacarrinhocontinuarcomprando} className="botaopizza">Adicionar pizza</button>
                        <button onClick={adicionacarrinho} className="botaofinalizar">Adicionar ao carrinho</button>
                    </div>
                </div>
            </div>
        </div>
    );
}