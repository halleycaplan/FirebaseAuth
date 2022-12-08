import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC15YUSBsic7qbG5aaSA7YDXIqLWd4YED4",
  authDomain: "latin-learner-3.firebaseapp.com",
  projectId: "latin-learner-3",
  storageBucket: "latin-learner-3.appspot.com",
  messagingSenderId: "1077197040169",
  appId: "1:1077197040169:web:5c5dd3e45d0b8d2db14a38"
};
firebase.initializeApp(firebaseConfig);
export default firebase;
