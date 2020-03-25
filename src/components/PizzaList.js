import React, { Component } from 'react';

class PizzaList extends Component {
    state = {
        pizza:'',
        pizzas:[
            'calabresa',
            'bacon',
            'gueroba'
        ]
    };

    handleInputChange = e => {
        this.setState({ pizza: e.target.value });
        
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(e);
        this.setState({ pizzas: [...this.state.pizzas, this.state.pizza],
        pizza: ''
        });
        console.log(this.state.pizza)
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <ul>
                    {this.state.pizzas.map(pizza => <li key={pizza}>{pizza}</li>)}
                </ul>
                <input 
                    type="text"
                    onChange = {this.handleInputChange}
                    value = {this.state.pizza}
                />
                <button type="submit">  Enviar </button>
            </form>
        );
    }

}

export default PizzaList;