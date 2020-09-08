import React, { Component } from 'react';
import { render } from 'react-dom';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            message: "Hello world !!!"
        }
    }
    render() {
        let {message} = this.state;

        return <h1>{message}</h1>
    }
}

render(
    <App />,
    document.getElementById('root')
)