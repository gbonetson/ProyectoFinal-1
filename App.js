import * as React from 'react';
import MainContainer from './navigation/MainContainer';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getFirestore, setDoc, doc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const firestore= getFirestore();


function App(){
  return(
    <MainContainer/>
  );
}

export default App;
