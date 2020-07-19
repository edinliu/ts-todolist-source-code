import * as React from 'react';
import { useState } from 'react';
import readCollection from './functions/readCollection';

export default function ReadCollection(props: { collectionName?: string }) {
  const { collectionName } = props;
  const [message, setMessage] = useState('');

  return (
    <div className="d-flex flex-column align-items-center">
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => {
          readCollection(collectionName, setMessage);
        }}
      >
        Read collection
      </button>
      <p>{message}</p>
    </div>
  );
}
ReadCollection.defaultProps = {
  collectionName: null,
};
