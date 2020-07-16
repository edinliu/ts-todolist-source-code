import * as React from 'react';

export default function AuthMessage(props:
  {
    message: string, errorCode: string, errorMessage: string
  }) {
  const { message, errorCode, errorMessage } = props;
  return (
    <>
      {message && (
        <>
          <h5>Message:</h5>
          <p>{message}</p>
        </>
      )}
      {errorCode && (
        <>
          <h5>Error Code:</h5>
          <p>{errorCode}</p>
        </>
      )}
      {errorMessage && (
        <>
          <h5>Error Message:</h5>
          <p>{errorMessage}</p>
        </>
      )}
    </>
  );
}
