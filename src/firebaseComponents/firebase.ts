import * as firebase from 'firebase/app';
import firebaseConfig from './configs/firebaseConfig';
import 'firebase/auth';
import 'firebase/firestore';

console.log('init fb.');
firebase.initializeApp(firebaseConfig);

export default firebase;
