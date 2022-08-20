// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsBg3_Yet-NXAH6dQid-BLm5RaND2BBqQ",
  authDomain: "potholefinder-c11b4.firebaseapp.com",
  projectId: "potholefinder-c11b4",
  storageBucket: "potholefinder-c11b4.appspot.com",
  messagingSenderId: "631185378037",
  appId: "1:631185378037:web:7311936a7cdb36037fd3bc",
  measurementId: "G-7JNWE52ECH",
  databaseURL:"https://potholefinder-c11b4-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
