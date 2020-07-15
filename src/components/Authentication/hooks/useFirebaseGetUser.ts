import { useState, useEffect } from 'react';
import firebase from 'firebase';
/**
return user:any | null
 */
const useFirebaseAuthentication = (): any | null => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unlisten = firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) setAuthUser(user);
        else setAuthUser(null);
      },
    );
    return () => {
      unlisten();
    };
  });

  return authUser;
};

export default useFirebaseAuthentication;
