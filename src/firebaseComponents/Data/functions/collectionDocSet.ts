import firebase from '../../firebase';

export default function collectonDocSet(
  collectionName: string, docName: string, jsonData: object,
) {
  const db = firebase.firestore();
  db.collection(collectionName).doc(docName).set(jsonData);
}
