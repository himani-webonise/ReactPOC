import React, { Component } from 'react';

class LoggingButton extends React.Component {
  constructor(props) {
      super(props);
      this.state = { name : 'himani'}
  }

  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}


export default LoggingButton;