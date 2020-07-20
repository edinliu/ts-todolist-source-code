import * as React from 'react';
import * as firebase from 'firebase/app';
import { useState } from 'react';
import AuthMessage from '../AuthMessage';

export default function AuthByMe() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorCode, setErrorCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isDisable, setIsDisable] = useState(false);
  const [message, setMessage] = useState('');
  function handleError(error) {
    setErrorCode(error.code);
    setErrorMessage(error.message);
    setIsDisable(false);
  }
  function clearAllMessage() {
    setMessage('');
    setErrorMessage('');
    setErrorCode('');
  }
  function signIn() {
    clearAllMessage();
    setIsDisable(true);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        setIsDisable(false);
        setMessage('Sign in success !');
      })
      .catch((error) => {
        // Handle Errors here.
        handleError(error);
      });
  }

  return (
    <>
      <div className="d-flex flex-column align-items-center w-100">
        <h3>Sign in by email and password</h3>
        <input type="text" onChange={(e) => { setEmail(e.target.value); }} placeholder="email" className="rounded w-100" />
        <input type="text" onChange={(e) => { setPassword(e.target.value); }} placeholder="password" className="rounded w-100" />
        <button disabled={isDisable} type="button" onClick={signIn} className="btn btn-primary w-100">Sign In</button>
      </div>
      <AuthMessage message={message} errorCode={errorCode} errorMessage={errorMessage} />
    </>
  );
}
