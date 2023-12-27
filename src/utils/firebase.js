// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCptdeiGeh1T71h2jnWnKVS2VuYPfGDFqQ",
  authDomain: "netflixgpt-9cd35.firebaseapp.com",
  projectId: "netflixgpt-9cd35",
  storageBucket: "netflixgpt-9cd35.appspot.com",
  messagingSenderId: "97826880547",
  appId: "1:97826880547:web:e9ff6206dc52850dbb0596",
  measurementId: "G-LTSRKRCMP0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
