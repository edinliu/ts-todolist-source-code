import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bootstrap/scss/bootstrap.scss';
import './index.scss';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../configs/firebaseConfig';
import TodoApp from './components/TodoApp';
import * as serviceWorker from './serviceWorker';
import CreateUserByEmailAndPassword from './components/Authentication/CreateUserByEmailAndPassword';
import CreateUserByEmail from './components/Authentication/CreateUserByEmail';
import SignInByEmailAndPassword from './components/Authentication/SignInByEmailAndPassword';
import UserProfile from './components/Authentication/UserProfile';
import SignOut from './components/Authentication/SignOut';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <>
    <div className="container d-flex justify-content-center">
      <div className="w-50 d-flex flex-column align-items-center">
        <CreateUserByEmail />
        <CreateUserByEmailAndPassword />
        <SignInByEmailAndPassword />
        <UserProfile />
        <SignOut />
        <TodoApp />
      </div>
    </div>
  </>,
  document.querySelector('#root'),
);
serviceWorker.register();
