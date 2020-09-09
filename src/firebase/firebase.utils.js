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
  measurementId: "G-S41S8LFFZE",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;