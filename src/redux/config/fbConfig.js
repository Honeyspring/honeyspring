// Firebase App (the core Firebase SDK) is always required and must be listed first
//import firebase from "firebase/app";
import * as firebase from 'firebase';

import "firebase/storage";
// Add the Firebase products that you want to use
import "firebase/auth";

import "firebase/firestore";

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2a4Xb6b-uoDMQKa0FsGuIC73p8ZracAs",
  authDomain: "aspire-95f1c.firebaseapp.com",
  databaseURL: "https://aspire-95f1c.firebaseio.com",
  projectId: "aspire-95f1c",
  storageBucket: "aspire-95f1c.appspot.com",
  messagingSenderId: "226826747822",
  appId: "1:226826747822:web:765217f0909ec7aa02523f",
  measurementId: "G-89KGYLCELN"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);// 
/* const projectStorage = firebase.storage();
const projectfirestore = firebase.firestore().settings({timeStampInSnapShots:true});  */
/* export {
     projectStorage,
     projectfirestore
}; */
firebase.firestore().settings({ timeStampInSnapShots: true });

 export default firebase