import * as React from 'react';
import collectionDocSet from './functions/collectionDocSet';

export default function AddData(
  props: {
    collectionName?: string, docName: string, jsonData?: object
  },
) {
  const { collectionName, docName, jsonData } = props;
  return (
    <div className="d-flex flex-column align-items-center">
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => {
          collectionDocSet(collectionName, docName, jsonData);
        }}
      >
        Send data
      </button>
    </div>
  );
}
AddData.defaultProps = {
  collectionName: null,
  jsonData: null,
};
