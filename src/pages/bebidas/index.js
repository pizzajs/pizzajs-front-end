import React, { useEffect, useState } from 'react';

import Cabecalho from '../../utils/cabecalho';
import './styles.css';

import { AdicionarBebida } from '../../store/modules/pedido/action'
import { FiPlusSquare, FiMinusSquare } from "react-icons/fi";
import api from '../../services/api';
import { useDispatch, useSelector } from 'react-redux';
import history from '../../services/history';

export default function Bebida() {

    const valorpedido = useSelector(state => state.pedido.preco)
    const [bebidas, setBebidas] = useState([]);
    const [valortotal, setValortotal] = useState(0);
    //const [item, setItem] = useState([]);
    const [quantidadeBebida, setQuantidadeBebida] = useState([0]);
    const dispatch = useDispatch();

    useEffect(() => {

        let bebidaquantidade = [ ...quantidadeBebida]

        api.get('bebidas').then(res => {
            setBebidas(res.data)
            setValortotal(valorpedido)
            
            res.data.map(bebida => {
                bebidaquantidade[bebida.id] = 0
            })

            setQuantidadeBebida(bebidaquantidade)
        })
            
    }, [])

    

    async function adicionacarrinho() {

        //await dispatch(AdicionarBebida(item, valortotal));
        //history.push('/pedido')
    }

    async function adicionacarrinhocontinuarcomprando() {
        //await dispatch(AdicionarBebida(item, valortotal));
        //history.push('/home')
    }

    function AdicionarBebida(id, preco) {
        let quantidadeDeBebidas = [ ...quantidadeBebida]
        quantidadeDeBebidas[id] += 1
        setQuantidadeBebida(quantidadeDeBebidas)
        
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
                                <div className="botoesBebidas">
                                    <h2 className="bebida" >{bebida.nome}</h2>
                                    <FiMinusSquare className='botaoDiminuir' size={25} onClick={() => {}}/>
                                         <h4 className="quantidadeBebida">{quantidadeBebida[bebida.id]}</h4>
                                    <FiPlusSquare className='botaoAumentar' size={25} color="#red" onClick={() => AdicionarBebida(bebida.id, bebida.precopreco)} />
                                </div>
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