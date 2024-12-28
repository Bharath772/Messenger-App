import firebase from "firebase/compat/app";
import "firebase/compat/firestore"; // Import Firestore compatibility module

const firebaseApp = firebase.initializeApp({
  apiKey: "XXXXXXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXXXXXXX",
  projectId: "XXXXXXXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXXXXXXX",
  messagingSenderId: "XXXXXXXXXXXXXXXX",
  appId: "XXXXXXXXXXXXXXXX",
});

// Initialize Firestore
const db = firebaseApp.firestore();

export default db;
