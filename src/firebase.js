// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDF2HwuwBqQpLUcyuYwJYo9K1WDoEwCacI",
  authDomain: "form-contextapi.firebaseapp.com",
  projectId: "form-contextapi",
  storageBucket: "form-contextapi.appspot.com",
  messagingSenderId: "212761087465",
  appId: "1:212761087465:web:41441cd64c0485be454f78",
  measurementId: "G-J9F1QRG8MT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
