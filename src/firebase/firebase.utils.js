import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC_QCxuz9BQdQcLHbPd1oKCKMzv3sI0ENw",
  authDomain: "crwn-db-39d48.firebaseapp.com",
  projectId: "crwn-db-39d48",
  storageBucket: "crwn-db-39d48.appspot.com",
  messagingSenderId: "734264039466",
  appId: "1:734264039466:web:6d793daeb345e501c54b53",
  measurementId: "G-9G1H4GLE8Q"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
