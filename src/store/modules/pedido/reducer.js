import produce from 'immer';

const inicial_state = {
     preco: 0,
     pizzas: [],
     bebidas: [],
     pedido_ativo: false
};

export default function pedido(state= inicial_state, actions){
     switch(actions.type) {
//         case 'ADD_PIZZA':
//             return produce(state, draft => {

//             })
//         case 'REMOVE_PIZZA':
//             return produce(state, draft => {

//             })
         case 'ADD_BEBIDA':
            return produce(state, draft => {
                draft.bebidas = actions.payload.bebida
                draft.preco += actions.payload.valor
            })
//         case 'REMOVE_BEBIDA':
//             return produce(state, draft => {

//             })
//         case 'FINALIZAR_PEDIDO':
//             return produce(state, draft => {

//             })
//         case 'CANCELAR_PEDIDO':
//             return produce(state, draft => {

//             })
         default: 
             return state;  
     }
     
 }