import * as firebase from 'firebase/app';
import 'firebase/firestore';

export default async function readCollection(
  collectionName: string, setMessage?: (message: string) => void,
) {
  if (collectionName) {
    try {
      const db = firebase.firestore();
      const idAndData = {};
      const querySnapshot = await db.collection(collectionName).get();
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        idAndData[doc.id] = doc.data();
      });
      setMessage(JSON.stringify(idAndData));
    } catch (err) {
      setMessage(JSON.stringify(err));
    }
  } else {
    setMessage('missing collection name');
  }
}
