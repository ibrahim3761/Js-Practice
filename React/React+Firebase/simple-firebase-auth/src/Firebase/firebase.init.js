
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARwKfSUrnxOdYbPpXX3n7PBfWzhLaDQ5g",
  authDomain: "simple-firebase-auth-24244.firebaseapp.com",
  projectId: "simple-firebase-auth-24244",
  storageBucket: "simple-firebase-auth-24244.firebasestorage.app",
  messagingSenderId: "669291086912",
  appId: "1:669291086912:web:d1f24b316b22e113900ba5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);