import { takeLatest, call, put , all } from 'redux-saga/effects';
import api from '../../../services/api';
import { finalizarPedido } from './action';
import history from '../../../services/history'



export function* concluirPedido({payload}){
    const { bebidaId, pizzas_ids, pizzas_customizadas, preco } = payload;
    
    try {
        yield call(api.post, 'pedidos', {
            pedido_ativo: true,
            preco: preco,
            bebidas_id: bebidaId,
            pizzas_id: pizzas_ids
        })
        
        yield put(finalizarPedido());

        alert("Seu pedido foi concluido!");
        history.push('/home');
        
    } catch (error) {
        alert('erro ao finalizar pedido');
    }
}


export default all([takeLatest('FINALIZAR_PEDIDO_REQUEST', concluirPedido)]);
