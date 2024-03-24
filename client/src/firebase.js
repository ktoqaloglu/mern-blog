// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-acaa5.firebaseapp.com",
  projectId: "mern-blog-acaa5",
  storageBucket: "mern-blog-acaa5.appspot.com",
  messagingSenderId: "445778245763",
  appId: "1:445778245763:web:76721e8c0ac7b2a2d6c3b6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
