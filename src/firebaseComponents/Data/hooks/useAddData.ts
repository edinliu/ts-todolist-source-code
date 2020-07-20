import { useState } from 'react';
import firebase from '../../firebase';

export default function useAddData(collectionName: string, jsonData: object) {
  const [message, setMessage] = useState('');
  const db = firebase.firestore();

  db.collection(collectionName).add(jsonData)
    .then((docRef) => {
      setMessage(`Document written with ID: ${docRef.id}`);
    })
    .catch((error) => {
      setMessage(`Error adding document: ${error}`);
    });
  return message;
}
