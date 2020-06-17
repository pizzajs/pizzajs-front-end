import produce from 'immer';

const inicial_state = {
     preco: 0,
     pizzas: {},
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
            if(state.pizzas_ids.includes(actions.payload.pizza.id)){
                return produce(state, draft => {
                    draft.pizzas_ids = [...state.pizzas_ids],
                    draft.preco += actions.payload.pizza.preco,
                    draft.pizzas = state.pizzas,
                    draft.pizzas[actions.payload.pizza.id].quantidade +=1 
                })

            }
            else{
                return produce(state, draft => {
                    draft.pizzas_ids = [...state.pizzas_ids, actions.payload.pizza.id],
                    draft.preco += actions.payload.pizza.preco,
                    draft.pizzas = state.pizzas,
                    draft.pizzas[actions.payload.pizza.id] = {sabor: actions.payload.pizza.sabor, ingredientes:actions.payload.pizza.ingredientes_padrao, quantidade: 1 , valor: actions.payload.pizza.preco }
                })
            }
            break;
        case 'REMOVE_PIZZA':
            if(!state.pizzas_ids.includes(actions.payload.id)){
                alert('Não existe essa pizza')
                return state;
            }
            else{
                if(states.pizza[actions.payload.id].quantidade > 1){
                    return produce(state, draft => {
                        draft.pizzas_ids = [...state.pizzas_ids],
                        draft.preco -= state.pizzas[actions.payload.id].preco,
                        draft.pizzas = state.pizzas,
                        draft.pizzas[actions.payload.id].quantidade -=1
                    })
                }
                else{
                    return produce(state, draft => {
                        draft.pizzas_ids = [...state.pizzas_ids].filter(item => item !== actions.payload.id),
                        draft.preco -= state.pizzas[actions.payload.id].preco,
                        draft.pizzas = state.pizzas,
                        draft.pizzas = delete draft.pizzas[actions.payload.pizza.id]
                    })
                }

            }



        case 'ADD_BEBIDA':
            return produce(state, draft => {
                draft.bebidas = actions.payload.bebida,
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
                draft.pizzas =  {},
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