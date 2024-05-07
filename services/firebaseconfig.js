import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCoYtXaYEcFY9veusvBq7n6Vp4JX1WmLUM",
  authDomain: "capture-and-paste.firebaseapp.com",
  projectId: "capture-and-paste",
  storageBucket: "capture-and-paste.appspot.com",
  messagingSenderId: "532306488582",
  appId: "1:532306488582:web:f5a276c8eb9a8534c5c287",
  measurementId: "G-L43GTPTQ7Z"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
const db = getFirestore(app);
export { auth, db };