import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1SuwHYvFnQsFfUOpUjHLmHT-OKZ3Rgtc",

  authDomain: "crudpoligonosbateeiros.firebaseapp.com",

  projectId: "crudpoligonosbateeiros",

  storageBucket: "crudpoligonosbateeiros.appspot.com",

  messagingSenderId: "322285173215",

  appId: "1:322285173215:web:a459d6bfdfa3b2e87fac6a"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

