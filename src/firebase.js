// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOwo0nXVUCqbCQzAeTwu7TsLj0ckwyliY",
  authDomain: "auranatura-a6d8a.firebaseapp.com",
  projectId: "auranatura-a6d8a",
  storageBucket: "auranatura-a6d8a.firebasestorage.app",
  messagingSenderId: "438915299792",
  appId: "1:438915299792:web:3482987963f159bae561d5",
  measurementId: "G-XJ95GJYWNT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
