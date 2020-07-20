import firebase from 'firebase';

export default function collectionAdd(
  collectionName: string, jsonData: object, setMessage?: (message: string) => void,
) {
  if (collectionName && jsonData) {
    const db = firebase.firestore();

    db.collection(collectionName).add(jsonData)
      .then((docRef) => {
        setMessage(`Document written with ID: ${docRef.id}`);
      })
      .catch((error) => {
        setMessage(`Error adding document: ${error}`);
      });
  } else {
    let missing;
    if (!collectionName && !jsonData) missing = 'collection name and json data';
    else if (!collectionName) missing = 'collection name';
    else if (!jsonData) missing = 'json data';
    else missing = 'error';
    setMessage(`missing ${missing}`);
  }
}
