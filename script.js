import React, { Component } from 'react';
import { render } from 'react-dom';
import img from './79.jpg';
// import img from './avatar.png';
import './assets/sass/main.scss';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            message: "Hello world !!!"
        }
    }

    // Comportement
    handleMessage() {
        if (this.state.message === "Hello world !!!") {
            return this.setState({message: "Bonjour le monde !"});
        } 
        
        return this.setState({message: "Hello world !!!"});
    }

    render() {
        let {message} = this.state;

        return (
            <div>
                <h1>{message}</h1>
                <img src={img} />
                <button onClick={this.handleMessage.bind(this)}>Changer de message</button>
            </div>
        )
    }
}

render(
    <App />,
    document.getElementById('root')
);