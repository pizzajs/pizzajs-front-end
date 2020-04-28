const inicial_state = {valor:'funcionando reducer'};

export default function auth(state= inicial_state, actions){
    switch(actions.type) {
        case 'TEST':
            console.log(state);
            return state;
        default: 
            return state;  
    }
}