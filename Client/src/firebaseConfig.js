// src/firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// We don't need getAnalytics right now, but we DO need getAuth and getFirestore
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLBn-B8hCcR595AEgeWSHB3pQv5EEr3Fg",
  authDomain: "doc-appointments-6e128.firebaseapp.com",
  projectId: "doc-appointments-6e128",
  storageBucket: "doc-appointments-6e128.firebasestorage.app",
  messagingSenderId: "852891621265",
  appId: "1:852891621265:web:86fd375b12603add072c30",
  measurementId: "G-TWYHL6YD7E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and EXPORT the services your app needs
// These are the lines that fix the error
export const auth = getAuth(app);
export const db = getFirestore(app);