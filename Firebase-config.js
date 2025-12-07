// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWcrsW-X9ubv0a0-LiGVCPfnMcaeQkEpk",
  authDomain: "bookloom-3d9c3.firebaseapp.com",
  projectId: "bookloom-3d9c3",
  storageBucket: "bookloom-3d9c3.firebasestorage.app",
  messagingSenderId: "251576999682",
  appId: "1:251576999682:web:efe90e1406b92b1297ac1b",
  measurementId: "G-NMC6ERQ36E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
