import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


function Clock(props) {
  
  return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    )
}

var date 

function tick() {
  ReactDOM.render(
    <Clock date={new Date()}/>,
    document.getElementById('root')
  );
}


setInterval(tick, 1000);
registerServiceWorker();
