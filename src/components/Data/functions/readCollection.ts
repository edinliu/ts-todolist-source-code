import * as firebase from 'firebase/app';

export default async function readCollection(
  collectionName: string, setMessage?: (message: string) => void,
) {
  if (collectionName) {
    const db = firebase.firestore();
    const idAndData = {};
    const querySnapshot = await db.collection(collectionName).get();
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      idAndData[doc.id] = doc.data();
    });
    setMessage(JSON.stringify(idAndData));
  } else {
    setMessage('missing collection name');
  }
}
