import * as React from 'react';
import { useState } from 'react';
import CreateUserByEmail from './CreateUserByEmail';
import CreateUserByEmailAndPassword from './CreateUserByEmailAndPassword';
import SignInByEmailAndPassword from './SignInByEmailAndPassword';
import useFirebaseGetUser from './hooks/useFirebaseGetUser';
import ButtonBs from './components/ButtonBs';
import { AuthProvider } from './AuthProvider';

function SelectSignInMethod(props: { onClick: (value: number) => void }) {
  const { onClick } = props;
  return (
    <div>
      <ButtonBs
        onClick={() => { onClick(0); }}
      >
        Create User By Email
      </ButtonBs>
      <ButtonBs
        onClick={() => { onClick(1); }}
      >
        Create User By Email And Password
      </ButtonBs>
      <ButtonBs
        onClick={() => { onClick(2); }}
      >
        Sign In By Email And Password
      </ButtonBs>
    </div>
  );
}
export default function AuthPage(props: { children?: any }) {
  const { children } = props;
  const [which, setWhich] = useState(null);
  const authUser = useFirebaseGetUser();
  return (
    <AuthProvider>
      <div className="container vh-100 d-flex flex-column justify-content-center">
        {!authUser && which === null && <SelectSignInMethod onClick={setWhich} />}
        {!authUser && which === 0 && <CreateUserByEmail />}
        {!authUser && which === 1 && <CreateUserByEmailAndPassword />}
        {!authUser && which === 2 && <SignInByEmailAndPassword />}
        {!authUser && which !== null && (
          <ButtonBs
            onClick={() => { setWhich(null); }}
          >
            BACK
          </ButtonBs>
        )}
        {/* {authUser && <h3>{JSON.stringify(authUser.uid)}</h3>} */}
        {authUser && children}
      </div>
    </AuthProvider>
  );
}
AuthPage.defaultProps = {
  children: null,
};
