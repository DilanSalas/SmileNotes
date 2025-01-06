// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH73JJ8xD_KHyTN1r49LxSyqWom-tNVbo",
  authDomain: "journalreact-46749.firebaseapp.com",
  projectId: "journalreact-46749",
  storageBucket: "journalreact-46749.firebasestorage.app",
  messagingSenderId: "766809452998",
  appId: "1:766809452998:web:dca9670efda72171b342c7",
  measurementId: "G-9KQDQP62X8"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(FirebaseApp);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseFirestore = getFirestore(FirebaseApp);