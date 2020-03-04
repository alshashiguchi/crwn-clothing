import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCBJuYU0VuS6YyyKvEFBv4rjYoXCtHQ6qs",
  authDomain: "crwn-db-9dbd0.firebaseapp.com",
  databaseURL: "https://crwn-db-9dbd0.firebaseio.com",
  projectId: "crwn-db-9dbd0",
  storageBucket: "crwn-db-9dbd0.appspot.com",
  messagingSenderId: "787557401073",
  appId: "1:787557401073:web:aaf035440fe1a706668450",
  measurementId: "G-YBHYVKSGVX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;