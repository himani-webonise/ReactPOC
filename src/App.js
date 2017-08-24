import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        user : {
            firstName: 'Harper',
            lastName: 'Perez'
        }
      }
    }

    formatName() {
        let user = this.state.user;
        return user.firstName + ' ' + user.lastName;
    }

    render() {
        return (
          <div className="App">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2> {this.formatName()}, Welcome</h2>
              </div>
              <p className="App-intro">
                To get started, edit <code></code> and save to reload.
              </p>
          </div>
        );
    }
}
