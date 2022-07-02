import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyX0Of0MNl6ORorUztAKfqiI5wFodoKXE",

  authDomain: "firestoreandroid-5aeb5.firebaseapp.com",

  projectId: "firestoreandroid-5aeb5",

  storageBucket: "firestoreandroid-5aeb5.appspot.com",

  messagingSenderId: "868798150099",

  appId: "1:868798150099:web:64f9de9bedeecc8a042b26"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

