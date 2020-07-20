import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bootstrap/scss/bootstrap.scss';
import './index.scss';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../configs/firebaseConfig';
import * as serviceWorker from './serviceWorker';
import TodoApp from './components/TodoApp/TodoApp';
import AuthPage from './firebaseComponents/Auth/AuthPage';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <>
    <div className="container d-flex justify-content-center">
      <div className="w-50 d-flex flex-column align-items-center">
        <AuthPage><TodoApp /></AuthPage>
      </div>
    </div>
  </>,
  document.querySelector('#root'),
);
serviceWorker.register();
