import React from  'react';
import './App.css';
import lua from './assets/lua.png';
// function App() {
//     return <img src= {lua}/>
// }

import PizzaList from './components/PizzaList';

function App() {
    return( <div> 
                <PizzaList/>
                <img src={lua}/>
            </div>)
}
export default App;