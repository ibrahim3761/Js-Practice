// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJBFDv5c69mePTAYa9bV3sBKoUxsBf9kQ",
  authDomain: "explore-email-password-a-54f9c.firebaseapp.com",
  projectId: "explore-email-password-a-54f9c",
  storageBucket: "explore-email-password-a-54f9c.firebasestorage.app",
  messagingSenderId: "589982532092",
  appId: "1:589982532092:web:2977eecf376a9a35dff279"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);