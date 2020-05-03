import { takeLatest, call, put , all } from 'redux-saga/effects';
import api from '../../../services/api';
import { loginSuccess } from './action';
import history from '../../../services/history'



export function* login({payload}){
    const { email,  senha} = payload;

    
    try {
        const response = yield call(api.post, 'sessions', {
            email,
            senha
        })
        const { token, user } = response.data;

        yield put(loginSuccess(token, user));

        api.defaults.headers.Authorization = `Bearer ${token}`; 
        history.push('/home');
        
    } catch (error) {
        alert('erro ao logar');
    }

    
    
}

function setToken({payload}){
    if(!payload){
        return;
    }
    const token = payload.auth.token;

    if(token){
        api.defaults.headers.Authorization = `Bearer ${token}`; 
    }
}

export default all([
    takeLatest('persist/REHYDRATE',setToken),
    takeLatest('LOGIN_REQUEST', login)
]);