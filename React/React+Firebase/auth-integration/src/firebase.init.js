// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Danger zone
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBVOfqEgUDEkxHft9n1Y4YiyWlOepFMbc",
  authDomain: "auth-integration-bbf0d.firebaseapp.com",
  projectId: "auth-integration-bbf0d",
  storageBucket: "auth-integration-bbf0d.firebasestorage.app",
  messagingSenderId: "618461945925",
  appId: "1:618461945925:web:a22afc33af20efa7c2832c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);