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
        console.log('redirecionar');
        history.push('/home');
        
    } catch (error) {
        alert('erro ao logar');
    }

    
    
}

export default all([
    takeLatest('LOGIN_REQUEST', login)
]);