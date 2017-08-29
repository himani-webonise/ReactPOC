import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
         {formatDate(props.date)}
      </div>
    </div>
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function formatDate(date) {
  return date.toLocaleDateString();
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}


const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
}

function Launch() {
  return (
    <div>
        <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author} />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

function tick() {
  const element = <Welcome name="Sara" />;
  ReactDOM.render(
    <Launch />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
