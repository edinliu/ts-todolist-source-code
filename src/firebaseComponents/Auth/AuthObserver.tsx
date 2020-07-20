import * as React from 'react';
import useFirebaseGetUser from './hooks/useFirebaseGetUser';

export default function AuthObserver() {
  const authUser = useFirebaseGetUser();
  return (
    <>
      <h3>Your id</h3>
      <h3>{JSON.stringify(authUser?.uid)}</h3>
      <h3>message</h3>
    </>
  );
}
