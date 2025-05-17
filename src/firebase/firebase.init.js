// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqpO4eOGp6U5CEDbOtNph3t-ZQItUb0Ks",
  authDomain: "coffee-store-c6fed.firebaseapp.com",
  projectId: "coffee-store-c6fed",
  storageBucket: "coffee-store-c6fed.firebasestorage.app",
  messagingSenderId: "299317956246",
  appId: "1:299317956246:web:41cd8eb3997c8b200d3cb7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
