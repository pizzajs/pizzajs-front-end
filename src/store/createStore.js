import { createStore , applyMiddleware} from 'redux';

export default (reducers, middlewares) =>{
    const Middlewares = applyMiddleware(...middlewares);
    return createStore(reducers, Middlewares);
};