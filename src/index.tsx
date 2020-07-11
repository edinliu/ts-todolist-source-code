import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bootstrap/scss/bootstrap.scss';
import './index.scss';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../configs/firebaseConfig';
// import TodoApp from './components/TodoApp';
import SignIn from './components/SignInBy';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <>
    <SignIn />
    {/* <TodoApp /> */}
  </>,
  document.querySelector('#root'),
);
