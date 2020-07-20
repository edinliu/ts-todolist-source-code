import * as firebase from 'firebase/app';
import 'firebase/firestore';

export default function collectonDocGet(
  collectionName: string,
  docName: string,
  handleData: (data: firebase.firestore.DocumentData) => void,
  handleError: (err: string) => void,
) {
  const db = firebase.firestore();
  db.collection(collectionName).doc(docName).get().then((doc) => {
    if (doc.exists) {
      handleData(doc.data());
    } else {
      // doc.data() will be undefined in this case
      handleError('No such document!');
    }
  })
    .catch((error) => {
      handleError(error);
    });
}
