import * as React from 'react';
import { useState } from 'react';
import * as firebase from 'firebase/app';

export default function SignOut() {
  const [message, setMessage] = useState('');
  function handleSignOut() {
    firebase.auth().signOut().then(() => {
      setMessage('Sign-out successful.');
    }).catch((error) => {
      setMessage(JSON.stringify(error));
    });
  }
  return (
    <div className="d-flex flex-column">
      <button className="btn btn-primary" type="button" onClick={handleSignOut}>Sign out</button>
      <p>{message}</p>
    </div>
  );
}
