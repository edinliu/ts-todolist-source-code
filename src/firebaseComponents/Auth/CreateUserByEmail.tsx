import * as React from 'react';
import { useState } from 'react';
import firebase from '../firebase';
import AuthMessage from '../AuthMessage';

export default function AuthByMe() {
  const [email, setEmail] = useState('edinliu@gmail.com');
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
  function signInByEmailOnly() {
    clearAllMessage();
    // Disable the sign-in button during async sign-in tasks.
    setIsDisable(true);

    if (firebase.auth().currentUser) {
      // [START signout]
      firebase.auth().signOut().catch((error) => {
        // [START_EXCLUDE]
        handleError(error);
        // [END_EXCLUDE]
      });
      // [END signout]
    } else {
      // Sending email with sign-in link.
      // [START authwithemail]
      const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this URL
        // must be whitelisted in the Firebase Console.
        url: window.location.href, // Here we redirect back to this same page.
        handleCodeInApp: true, // This must be true.
      };

      firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings).then(() => {
        // Save the email locally so you don’t need to ask the user for it again if they open
        // the link on the same device.
        window.localStorage.setItem('emailForSignIn', email);
        // The link was successfully sent. Inform the user.
        setMessage(`An email was sent to ${email}. Please use the link in the email to sign-in.`);
        // [START_EXCLUDE]
        // Re-enable the sign-in button.
        setIsDisable(false);
        // [END_EXCLUDE]
      }).catch((error) => {
        // Handle Errors here.
        handleError(error);
        // [END_EXCLUDE]
      });
      // [END authwithemail]
    }
  }
  function onInputChange(e) {
    setEmail(e.target.value);
  }
  return (
    <>
      <div className="d-flex flex-column w-100 align-items-center">
        <h3>Create user by email</h3>
        <input type="text" onChange={onInputChange} placeholder="email" className="rounded w-100" />
        <button disabled={isDisable} type="button" onClick={signInByEmailOnly} className="rounded w-100 btn btn-primary">Sign In</button>
      </div>
      <AuthMessage message={message} errorCode={errorCode} errorMessage={errorMessage} />
    </>
  );
}
