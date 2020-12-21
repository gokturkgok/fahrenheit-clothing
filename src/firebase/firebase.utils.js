import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBWVZrtOPpTxCq9nN1ki4K8ZJtUjimK1ps",
  authDomain: "crown-db-5c979.firebaseapp.com",
  databaseURL: "https://crown-db-5c979.firebaseio.com",
  projectId: "crown-db-5c979",
  storageBucket: "crown-db-5c979.appspot.com",
  messagingSenderId: "962627414658",
  appId: "1:962627414658:web:04e3f86db96d535c58229b",
  measurementId: "G-S41S8LFFZE"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

// using this function, we can use to make new collections and documents
// whenever we want
export const addCollecitonAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapShotToMap = (collections) => {
  const transformedCollection = collections.docs.map( doc => {
    const { title, items } = doc.data();
  
    return{
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
//export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;