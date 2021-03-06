import * as React from 'react';
import { useState } from 'react';
import collectionAdd from './functions/collectionAdd';

export default function AddData(props: { collectionName?: string, jsonData?: object }) {
  const { collectionName, jsonData } = props;
  const [message, setMessage] = useState('');
  return (
    <div className="d-flex flex-column align-items-center">
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => {
          collectionAdd(collectionName, jsonData, setMessage);
        }}
      >
        Send data
      </button>
      <p>{message}</p>
    </div>
  );
}
AddData.defaultProps = {
  collectionName: null,
  jsonData: null,
};
