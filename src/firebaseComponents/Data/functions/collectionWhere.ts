import firebase from '../../firebase';

export default function collectionWhere(
  collectionName: string,
  fieldPath: string | firebase.firestore.FieldPath,
  relation: '<' | '<=' | '==' | '>=' | '>' | 'array-contains' | 'in' | 'array-contains-any',
  value: any,
) {
  const db = firebase.firestore();
  return db.collection(collectionName).where(fieldPath, relation, value);
}
