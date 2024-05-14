// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-be952.firebaseapp.com",
  projectId: "mern-auth-be952",
  storageBucket: "mern-auth-be952.appspot.com",
  messagingSenderId: "275007686415",
  appId: "1:275007686415:web:db86d9b641cb049ebda07a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);