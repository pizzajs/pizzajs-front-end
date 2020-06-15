import produce from 'immer';

const inicial_state = {
     preco: 0,
     pizzas: [],
     bebidas: [
         { 
            id : 0,
            nome: '',
            preco: 0}
     ],
     pedido_ativo: false
};

// fazer logica de persistir os dados do pedido.

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
        case 'REMOVE_BEBIDA':
            return produce(state, draft => {
                let Arraybebidas = state.bebidas.slice()
                Arraybebidas.splice(actions.payload.index, 1)
                draft.bebidas = Arraybebidas
            })
        case 'SIGN-OUT':
            return produce(state, draft => {
                draft.preco = 0,
                draft.pizzas =  [],
                draft.bebidas =  [],
                draft.pedido_ativo = false
            })
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