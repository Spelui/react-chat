import firebase from "firebase/compat/app";
import { getStorage } from "firebase/storage";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZsW8Xa0EHybzP8va2nBPuhsnvVm8iw7Y",
  authDomain: "react-chat-a111f.firebaseapp.com",
  databaseURL:
    "https://react-chat-a111f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-chat-a111f",
  storageBucket: "react-chat-a111f.appspot.com",
  messagingSenderId: "272380147117",
  appId: "1:272380147117:web:7ce387399c7065fb1ddd24",
  measurementId: "G-D7DHZ7BEYV",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const fireStore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
