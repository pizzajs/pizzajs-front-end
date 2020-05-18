import {combineReducers  } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import pedido from './pedido/reducer';

export default combineReducers({
    auth,
    user,
    pedido
}) 