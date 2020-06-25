//ACTIONS PIZZA

export function AdicionarPizzaProcess(pizza) {
    return {
        type: 'ADD_PIZZA_PROCESS',
        payload: { pizza }
    }
}

export function AdicionarPizza(pizza) {
    return {
        type: 'ADD_PIZZA',
        payload: { pizza }
    }
}

export function AdicionarPizzaCustomizada(pizza){
    return {
        type: 'ADD_PIZZA_CUSTOM',
        payload: {pizza}
    }
}

export function DeletarPizzaCustomizada(nome){
    return {
        type: 'DELETE_PIZZA_CUSTOM',
        payload: {nome}
    }
}

export function RemoverPizza(id) {
    return {
        type: 'REMOVE_PIZZA',
        payload: { id }
    }
}


//ACTIONS BEBIDA

// export function AdicionarBebidaProcess(bebida) {
//     return {
//         type: 'ADD_BEBIDA_PROCESS',
//         payload: { bebida }
//     }
// }

export function AdicionarBebida(bebida, valor) {
    return {
        type: 'ADD_BEBIDA',
        payload: { bebida, valor }
    }
}

export function RemoverBebida(index, valor) {
    return {
        type: 'REMOVE_BEBIDA',
        payload: { index, valor }
    }
}

//ACTIONS PEDIDO

export function finalizarPedido() {
    return {
        type: 'FINALIZAR_PEDIDO'
    }
}

export function cancelarPedido(id) {
    return {
        type: 'CANCELAR_PEDIDO',
        payload: { id }
    }
}