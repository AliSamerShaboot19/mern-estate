import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-two.firebaseapp.com",
  projectId: "mern-estate-two",
  storageBucket: "mern-estate-two.firebasestorage.app",
  messagingSenderId: "196215617946",
  appId: "1:196215617946:web:b552199d0fb260b8d66223",
};

export const app = initializeApp(firebaseConfig);
