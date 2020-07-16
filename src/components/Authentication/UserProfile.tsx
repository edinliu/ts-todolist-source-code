import * as React from 'react';
import useFirebaseGetUser from './hooks/useFirebaseGetUser';

export default function UserProfile() {
  const user = useFirebaseGetUser();
  let name; let email; let photoUrl; let uid; let
    emailVerified;

  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
  }
  return (
    <>
      <h1>User profile</h1>
      <p>{"name:" + name}</p>
      <p>{"email:" + email}</p>
      <p>{"photoUrl:" + photoUrl}</p>
      <p>{"emailVerified:" + emailVerified}</p>
      <p>{"uid:" + uid}</p>
    </>
  );
}
