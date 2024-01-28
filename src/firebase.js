import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAipBcxSbRhJuEysC3pHtifJKtNwkr0s40",
  authDomain: "todos-f713e.firebaseapp.com",
  projectId: "todos-f713e",
  storageBucket: "todos-f713e.appspot.com",
  messagingSenderId: "752830914640",
  appId: "1:752830914640:web:fdda35a364b59c9662f155",
  measurementId: "G-RYT49ECPKE",
  databaseURL: 'https://todos-f713e-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);