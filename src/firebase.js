import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBxnp-e1flgMQ09lgjsDlYNjbLidgiBdeE",
  authDomain: "vue-chat-d78d6.firebaseapp.com",
  projectId: "vue-chat-d78d6",
  storageBucket: "vue-chat-d78d6.appspot.com",
  messagingSenderId: "874197817185",
  appId: "1:874197817185:web:9a4dd4177820801f821720",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a Firestore instance
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
