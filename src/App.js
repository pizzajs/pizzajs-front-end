import React from  'react';
import { Router} from 'react-router-dom';
import './globalStyle.css';

import Rout from './routes';
import { Provider } from 'react-redux';
import history from './services/history';
import store from './store'

function App() {
    return(
        <Provider store={store}>
            <Router history={history}>
                <Rout />
            </Router>
        </Provider>
        
    )
}
export default App;

