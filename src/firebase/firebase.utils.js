import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

/* Basic firebase config and init */

const firebaseConfig = {
  apiKey: 'AIzaSyA5_u9q7rkwnD8HghW1BVrRNt0jzc9zkfU',
  authDomain: 'crwn-app-389b5.firebaseapp.com',
  databaseURL: 'https://crwn-app-389b5.firebaseio.com',
  projectId: 'crwn-app-389b5',
  storageBucket: '',
  messagingSenderId: '10049297610',
  appId: '1:10049297610:web:7fd172f5a12c7d50'
};

firebase.initializeApp(firebaseConfig);

/* exort acccess to auth and firestore libraries */

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* setup the Oauth2 flow for Google Login */

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

/* allow sign-in/sign-up with email and password */

export const createUserProfileDocument = async (userAuth, data) => {
  if (!userAuth) return;

  const userDocRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userDocRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userDocRef.set({
        displayName,
        email,
        createdAt,
        ...data
      });
    } catch (error) {
      console.log('error creating user', error);
    }
  }
  return userDocRef;
};

export default firebase;
