import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "peopleschoice-ff465.firebaseapp.com",
  projectId: "peopleschoice-ff465",
  storageBucket: "peopleschoice-ff465.appspot.com",
  messagingSenderId: "673460104660",
  appId: "1:673460104660:web:f9723e7152d633e4adfa41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app);