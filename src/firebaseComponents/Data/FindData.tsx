import * as React from 'react';
import collectionWhere from './functions/collectionWhere';

export default function AddData(
  props: {
    collectionName?: string,
    fieldPath: string,
    relation: '<' | '<=' | '==' | '>=' | '>' | 'array-contains' | 'in' | 'array-contains-any',
    jsonData?: object,
  },
) {
  const {
    collectionName, fieldPath, relation, jsonData,
  } = props;
  return (
    <div className="d-flex flex-column align-items-center">
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => {
          collectionWhere(collectionName, fieldPath, relation, jsonData);
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
