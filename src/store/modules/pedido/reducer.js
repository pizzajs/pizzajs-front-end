import produce from 'immer';

function removeKey(chave, dicionario){
    let aux = {};
    for(var key in dicionario){
        if(key !==chave){
            aux[key] = dicionario[key];
        }
    }
    return aux;
}

const inicial_state = {
     preco: 0,
     pizzas: {},
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
                    draft.preco = state.preco + actions.payload.pizza.preco,
                    draft.pizzas = state.pizzas,
                    draft.pizzas[actions.payload.pizza.id].quantidade +=1 
                })

            }
            else{
                return produce(state, draft => {
                    draft.pizzas_ids = [...state.pizzas_ids, actions.payload.pizza.id],
                    draft.preco = state.preco + actions.payload.pizza.preco,
                    draft.pizzas = state.pizzas,
                    draft.pizzas[actions.payload.pizza.id] = {sabor: actions.payload.pizza.sabor, ingredientes:actions.payload.pizza.ingredientes_padrao, quantidade: 1 , valor: actions.payload.pizza.preco }
                })
            }
        case 'REMOVE_PIZZA':
            const condicao = Boolean(state.pizzas_ids.includes(actions.payload.id));
            console.log(condicao, state.pizzas_ids);
            if(!state.pizzas_ids.includes(Number(actions.payload.id))){
                alert('Não existe essa pizza')
                return state;
            }
            else{
                if(state.pizzas[actions.payload.id].quantidade > 1){
                    return produce(state, draft => {
                        draft.pizzas_ids = [...state.pizzas_ids],
                        draft.preco = state.preco - state.pizzas[actions.payload.id].valor,
                        draft.pizzas = state.pizzas,
                        draft.pizzas[actions.payload.id].quantidade -=1
                    })
                }
                else{
                    return produce(state, draft => {
                        draft.pizzas_ids =state.pizzas_ids.filter(item => item !== Number(actions.payload.id)),
                        draft.preco = state.preco - state.pizzas[actions.payload.id].valor,
                        draft.pizzas = state.pizzas,
                        draft.pizzas = removeKey(actions.payload.id, draft.pizzas)
                    })
                }

            }
            
        
        case 'ADD_PIZZA_CUSTOM':
            return produce(state, draft => {
                draft.pizzas_customizadas = state.pizzas_customizadas,
                draft.preco += actions.payload.pizza.preco,
                draft.pizzas_customizadas[actions.payload.pizza.nome] = { ingredientesIds: actions.payload.pizza.ids, massa:actions.payload.pizza.massa, borda: actions.payload.pizza.borda, recheio:actions.payload.pizza.recheio ,valor: actions.payload.pizza.preco }

            });

        case 'DELETE_PIZZA_CUSTOM':
            return produce(state, draft => {
                draft.pizzas_customizadas = state.pizzas_customizadas,
                draft.preco = state.preco - state.pizzas_customizadas[actions.payload.nome].valor,
                draft.pizzas_customizadas= removeKey(actions.payload.nome, draft.pizzas_customizadas)
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
        case 'FINALIZAR_PEDIDO':
            return produce(state, draft => {
                state = inicial_state
            })
            
//         case 'CANCELAR_PEDIDO':
//             return produce(state, draft => {

//             })

         default: 
             return state;  
     }
     
 }