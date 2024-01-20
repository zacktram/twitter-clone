import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDGDDePNTIT_mlY6KbPC6Rih--MbKqmi4o",
  authDomain: "twitter-clone-d6c7f.firebaseapp.com",
  projectId: "twitter-clone-d6c7f",
  storageBucket: "twitter-clone-d6c7f.appspot.com",
  messagingSenderId: "398727209914",
  appId: "1:398727209914:web:7a0a53241a02e75ade3383",
  measurementId: "G-FDMSHHNYC0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


export default db;
