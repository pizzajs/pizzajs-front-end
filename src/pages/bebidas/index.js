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
    const stateQuantidadeBebida = useSelector(state => state.pedido.bebidas)

    const [bebidas, setBebidas] = useState([]);
    const [valortotal, setValortotal] = useState(0);
    const [quantidadeBebida, setQuantidadeBebida] = useState([0]);
    const dispatch = useDispatch();

    useEffect(() => {
        let bebidaquantidade = [ ...quantidadeBebida]
        let somaQuantidadeBebida = 0
        api.get('bebidas').then(res => {
            setBebidas(res.data)
            setValortotal(valorpedido)
            
            stateQuantidadeBebida.map(quantidadeBebida => {
                somaQuantidadeBebida += quantidadeBebida    
            })

            if( somaQuantidadeBebida != 0){
                bebidaquantidade = stateQuantidadeBebida
            }else {
                res.data.map(bebida => {
                    bebidaquantidade[bebida.id] = 0
                })
            }
            
            setQuantidadeBebida(bebidaquantidade)
        })
            
    }, [])

    async function adicionacarrinho() {

        let valor = valortotal - valorpedido
        await dispatch(AdicionarBebida(quantidadeBebida, valor));
        history.push('/pedido')
    }

    async function adicionacarrinhocontinuarcomprando() {
        await dispatch(AdicionarBebida(quantidadeBebida, valortotal));
        history.push('/home')
    }

    function AdicionarItem(id, preco) {
        let quantidadeDeBebidas = [ ...quantidadeBebida]
        quantidadeDeBebidas[id] += 1
        setQuantidadeBebida(quantidadeDeBebidas)
        setValortotal(valortotal + preco)
    }

    function RemoverBebida(id, preco) {
        let quantidadeDeBebidas = [ ...quantidadeBebida]
        
        if(quantidadeDeBebidas[id] === 0){
            return
        }

        quantidadeDeBebidas[id] -= 1
        setQuantidadeBebida(quantidadeDeBebidas)
        setValortotal(valortotal - preco)
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
                                    <FiMinusSquare className='botaoDiminuir' size={25} onClick={() => RemoverBebida(bebida.id, bebida.preco)}/>
                                         <h4 className="quantidadeBebida">{quantidadeBebida[bebida.id]}</h4>
                                    <FiPlusSquare className='botaoAumentar' size={25} color="#red" onClick={() => AdicionarItem(bebida.id, bebida.preco)} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="caixadireita">
                    <h1 className="valor">Valor Total: R${valortotal}</h1>
                    <div className="botoes">
                        <button onClick={() => adicionacarrinhocontinuarcomprando()} className="botaopizza">Adicionar pizza</button>
                        <button onClick={() => adicionacarrinho()} className="botaofinalizar">Adicionar ao carrinho</button>
                    </div>
                </div>
            </div>
        </div>
    );
}