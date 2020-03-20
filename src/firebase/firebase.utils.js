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

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${ userAuth.uid }`);

  const snapShot = await userRef.get();
  
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  await batch.commit();
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;