import React from  'react';
import { Router} from 'react-router-dom';
import './globalStyle.css';
import { PersistGate } from 'redux-persist/integration/react';

import Rout from './routes';
import { Provider } from 'react-redux';
import history from './services/history';
import {store, persistor} from './store'

function App() {
    return(
        <Provider store={store}>
            <PersistGate persistor={persistor} >
                <Router history={history}>
                    <Rout />
                </Router>
            </PersistGate>
        </Provider>
        
    )
}
export default App;

