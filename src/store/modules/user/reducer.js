import produce from 'immer'

const inicial_state = {
    id: null,
    name: null,
    email: null
};

export default function user(state= inicial_state, action){
    switch(action.type) {
        case 'LOGIN':
            return produce(state, draft => {
                draft.id = action.payload.user.id;
                draft.name = action.payload.user.nome;
                draft.email = action.payload.user.email;
            })
        case 'SIGN-OUT':
            return produce(state, draft => {
                draft.id = null;
                draft.nome = null;
                draft.email = null;
            })
        
        default: 
            return state;  
    }
}