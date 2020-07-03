import { takeLatest, call, put , all } from 'redux-saga/effects';
import api from '../../../services/api';
import { finalizarPedido } from './action';
import history from '../../../services/history'



export function* concluirPedido({payload}){
    const { bebidaId, pizzas_ids, pizzas_customizadas, preco } = payload;
    let pizzasid = []

    for(var pizza in pizzas_customizadas){
        pizzasid.push(pizzas_customizadas[pizza].ingredientesIds)
    }

    
    try {
        yield call(api.post, 'pedidos', {
            pizzas_customizadas: pizzasid,
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
