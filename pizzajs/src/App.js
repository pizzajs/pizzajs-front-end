import React from 'react';
import pizza from './/assets/pizza.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pizza} className="App-logo" alt="logo" />
        <p>
          Pizzajs a melhor pizza da região.
        </p>
      </header>
    </div>
  );
}

export default App;
