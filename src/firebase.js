// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC6HbI8Gx3YliWGAocJcLP7RUkDRgEq3I",
  authDomain: "defenceofmoscow.firebaseapp.com",
  projectId: "defenceofmoscow",
  storageBucket: "defenceofmoscow.appspot.com",
  messagingSenderId: "216672818757",
  appId: "1:216672818757:web:a5d4e6d71d2b819dc8f52c",
  measurementId: "G-Q6X5ELJNT4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
