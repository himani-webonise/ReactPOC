import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    
    // The componentDidMount() hook runs after the component output has been rendered to the DOM. 
    componentDidMount() {
        this.timeID = setInterval(
            () => this.tick(), 1000
        );
    }


    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          date: new Date()
        });
    }

    render() {
        return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        )
    }
}


ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
);


// setInterval(tick, 1000);
registerServiceWorker();
