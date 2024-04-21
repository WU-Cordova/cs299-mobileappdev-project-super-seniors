import {initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAWtL8l0x0HVHDmBjI6MrMNZn3MjgZnnqs",
    authDomain: "super-seniors-app.firebaseapp.com",
    projectId: "super-seniors-app",
    storageBucket: "super-seniors-app.appspot.com",
    messagingSenderId: "115387215702",
    appId: "1:115387215702:web:b530061e4faa22d68070f7"
  };

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);