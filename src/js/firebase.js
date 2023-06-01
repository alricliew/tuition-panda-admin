import firebase from "firebase/compat/app";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyBy5-JwlvpmjHXW-AklzbVH6xCfs81Eh84",
  authDomain: "tuition-panda.firebaseapp.com",
  projectId: "tuition-panda",
  storageBucket: "tuition-panda.appspot.com",
  messagingSenderId: "129910770531",
  appId: "1:129910770531:web:4d5270546da6788c592156"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

export function handleSignOut() {
  signOut(auth).then(() => {
    // Sign-out successful.
    window.location.href = "/login"
  }).catch((error) => {
    // An error happened.
  });
}
// Storage
export const storage = getStorage(app);

