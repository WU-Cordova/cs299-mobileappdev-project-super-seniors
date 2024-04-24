import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoYtXaYEcFY9veusvBq7n6Vp4JX1WmLUM",
  authDomain: "capture-and-paste.firebaseapp.com",
  projectId: "capture-and-paste",
  storageBucket: "capture-and-paste.appspot.com",
  messagingSenderId: "532306488582",
  appId: "1:532306488582:web:f5a276c8eb9a8534c5c287",
  measurementId: "G-L43GTPTQ7Z"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);