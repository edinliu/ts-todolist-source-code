import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bootstrap/scss/bootstrap.scss';
import './index.scss';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../configs/firebaseConfig';
import TodoApp from './components/TodoApp';
import * as serviceWorker from './serviceWorker';
import AuthByEmailAndPassword from './components/AuthByEmailAndPassword';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <>
    <AuthByEmailAndPassword />
    <TodoApp />
  </>,
  document.querySelector('#root'),
);
serviceWorker.register();
