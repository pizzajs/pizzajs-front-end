import produce from 'immer'

const inicial_state = {
    token: null,
    logado: false,
    loading: false
};

export default function auth(state= inicial_state, actions){
    switch(actions.type) {
        case 'LOGIN':
            return produce(state, draft => {
                draft.token = actions.payload.token;
                draft.logado = true;
            })
            break;
        case 'SIGN-OUT':
            return produce(state, draft => {
                
                draft.token = null;
                draft.logado = false;
            })
            break;

        default: 
            return state;  
    }
}