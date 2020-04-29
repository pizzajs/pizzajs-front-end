import React from  'react';
import { Router} from 'react-router-dom';
import './globalStyle.css';

import Routes from './routes';
import { Provider } from 'react-redux';

import store from './store'

function App() {
    return(
        <Provider store={store}>
            <Routes />
        </Provider>
        
    )
}
export default App;

