import produce from 'immer';

const inicial_state = {
     preco: 0,
     pizzas: [],
     pizzas_ids:[],
     pizzas_customizadas:[],
     bebidas: [],
     bebidas_ids:[],
     pedido_ativo: false
};

// fazer logica de persistir os dados do pedido.

export default function pedido(state= inicial_state, actions){
     switch(actions.type) {
        case 'ADD_PIZZA':
                return produce(state, draft => {
                    draft.pizzas_ids = [...state.pizzas_ids, actions.payload.pizza.id],
                    draft.preco += actions.payload.pizza.preco,
                    draft.pizzas = [...state.pizzas, { sabor: actions.payload.pizza.sabor, preco:actions.payload.pizza.preco , ingredientes: actions.payload.pizza.ingredientes_padrao, quantidade: 1}]
                })
            break;
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
                //console.log('entrou')
                //console.log(state.bebidas)
                //console.log(actions.payload.index)
                let Arraybebidas = state.bebidas.slice()
                Arraybebidas.splice(actions.payload.index, 1)
                draft.bebidas = Arraybebidas
            })
        case 'SIGN-OUT':
            return produce(state, draft => {
                draft.preco = 0,
                draft.pizzas =  [],
                draft.pizzas_ids =[],
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