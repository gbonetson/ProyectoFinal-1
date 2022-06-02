import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Firestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC4lyJRDvYwdyU0M-YpG1FqxT2jS-efK8U",
    authDomain: "proyectofinal-d934b.firebaseapp.com",
    databaseURL:"https://proyectofinal-d934b.firebaseio.com",
    projectId: "proyectofinal-d934b",
    storageBucket: "proyectofinal-d934b.appspot.com",
    messagingSenderId: "1023194734974",
    appId: "1:1023194734974:web:0b7e3c244354feec8d932f",
    measurementId: "G-0Q9RDE2V3V"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  

  export default{
      firebase,
      db,
  }