import React, { useEffect, useState } from 'react';

import Cabecalho from '../../utils/cabecalho';
import './styles.css';

import { AdicionarBebida } from '../../store/modules/pedido/action'

import api from '../../services/api';
import { useDispatch, useSelector } from 'react-redux';
import history from '../../services/history';

export default function Bebida() {

    const valorpedido = useSelector(state => state.pedido.preco)
    const [bebidas, setBebidas] = useState([]);
    const [valortotal, setValortotal] = useState(0);
    const [item, setItem] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        api.get('bebidas').then(res => {
            setBebidas(res.data)
            setValortotal(valorpedido)
        })

    }, [])

    async function adicionacarrinho() {
        
        await dispatch(AdicionarBebida(item, valortotal));
        history.push('/pedido')
    }

    async function adicionacarrinhocontinuarcomprando() {
        await dispatch(AdicionarBebida(item, valortotal));
        history.push('/home')
    }

    function adicionabebida(bebida) {

        
        if (item.find(beb => beb == bebida)) {
            let aux = item
            const posicao = aux.indexOf(bebida)
            aux.splice(posicao, 1)
            setItem(aux)
            setValortotal(valortotal - bebida.preco)
        } else {
            let aux = item
            aux.push(bebida)
            setItem(aux)
            setValortotal(valortotal + bebida.preco)
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
                        {bebidas.map(bebida => (
                            <li key={bebida.id} className="nomebebidas">
                                <label className="container">{bebida.nome}
                                    <input type="checkbox" value={bebida} onClick={() => adicionabebida(bebida)} />
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="caixadireita">
                    <h1 className="valor">Valor Total: R${valortotal}</h1>
                    <div className="botoes">
                        <button onClick={adicionacarrinhocontinuarcomprando} className="botaopizza">Adicionar pizza</button>
                        <button onClick={adicionacarrinho} className="botaofinalizar">Adicionar ao carrinho</button>
                    </div>
                </div>
            </div>
        </div>
    );
}