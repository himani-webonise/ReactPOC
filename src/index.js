import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date().getTime() };
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
        var date = new Date().getTime()
        this.setState({
          date: date
        });
    }

    render() {
        return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date}.</h2>
          </div>
        )
    }
}

function Application() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

ReactDOM.render(
    <Application/>,
    document.getElementById('root')
);


// setInterval(tick, 1000);
registerServiceWorker();
