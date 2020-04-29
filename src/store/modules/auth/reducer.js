const inicial_state = "funcionou";

export default function auth(state= inicial_state, actions){
    switch(actions.type) {
        case 'TEST':
            console.log(state);
            return state;
        default: 
            return state;  
    }
}