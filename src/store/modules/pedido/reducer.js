import produce from 'immer';

const inicial_state = {
     preco: 0,
     pizzas: {},
     bebidas: [
         { 
            id : 0,
            nome: '',
            preco: 0}
     ],
     pizzas_ids:[],
     pizzas_customizadas:{},
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
            
        
        case 'ADD_PIZZA_CUSTOM':
            console.log(actions.payload.pizza.nome,actions.payload.pizza.ids, actions.payload.pizza.preco)
            return produce(state, draft => {
                draft.pizzas_customizadas = state.pizzas_customizadas,
                draft.preco += actions.payload.pizza.preco,
                draft.pizzas_customizadas[actions.payload.pizza.nome] = { ingredientesIds: actions.payload.pizza.ids, ingredientes:actions.payload.pizza.ingredientes ,valor: actions.payload.pizza.preco }

            })


        case 'ADD_BEBIDA':
            return produce(state, draft => {
                draft.bebidas = actions.payload.bebida,
                draft.preco += actions.payload.valor
            })
        case 'REMOVE_BEBIDA':
            return produce(state, draft => {
                let Arraybebidas = state.bebidas.slice()
                Arraybebidas.splice(actions.payload.index, 1)
                draft.bebidas = Arraybebidas
                draft.preco -= actions.payload.valor
            })
        case 'SIGN-OUT':
            return produce(state, draft => {
                draft.preco = 0,
                draft.pizzas =  {},
                draft.pizzas_ids =[],
                draft.pizzas_customizadas = {},
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