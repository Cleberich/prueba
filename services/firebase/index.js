import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCUhpARQYyWJ32ozmJwDFu3KWBu43gKBKg",
  authDomain: "xeptiva.firebaseapp.com",
  projectId: "xeptiva",
  storageBucket: "xeptiva.appspot.com",
  messagingSenderId: "1013212932797",
  appId: "1:1013212932797:web:6c07c5088428ed7681e5d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
