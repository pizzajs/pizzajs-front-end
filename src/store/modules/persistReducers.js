import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
//Adicionar o reducer do pedido
export default reducers => {
    const persistedReducer = persistReducer({
        key: 'pizzajs',
        storage,
        whitelist: ['user', 'auth'],
    }, reducers);

    return persistedReducer;
}  