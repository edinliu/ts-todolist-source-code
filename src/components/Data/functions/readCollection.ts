import * as firebase from 'firebase/app';

export default function readCollection(
  collectionName: string, setMessage?: (message: string) => void,
) {
  if (collectionName) {
    const db = firebase.firestore();
    db.collection(collectionName).get()
      .then((querySnapshot) => {
        const idAndData = {};
        querySnapshot.forEach((doc) => {
          // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
          idAndData[doc.id] = doc.data();
        });
        return idAndData;
      })
      .then((data) => {
        setMessage(JSON.stringify(data));
      });
  } else {
    setMessage('missing collection name');
  }
}
