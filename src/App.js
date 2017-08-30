import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name : 'user'
        }
        this.updateUser = this.updateUser.bind(this)
    }

    updateUser() {
        let userInput = document.getElementById('userInput')
        this.setState({
            name: userInput.value
        })
    }

    render() {

        return (
            <div>
                <div className="App-header">
                    <Header name={this.state.name}/>
                </div>
                <div>
                    <input id="userInput" type="text"/>
                    <button onClick={this.updateUser}>Update User</button>
                </div>
            </div>
        );
    }
}

function Header(props) {
    return (<h2>Welcome to React {props.name}</h2>)
}

export default App;
