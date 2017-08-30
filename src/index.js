import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Toggle from './Toggle';
import LoggingButton from './LoggingButton';
import registerServiceWorker from './registerServiceWorker';

function Launch() {
    return(
      <div>
        <Toggle/>
        <LoggingButton/>
      </div>
    );
}

ReactDOM.render(<Launch />, document.getElementById('root'));

registerServiceWorker();
