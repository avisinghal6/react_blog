// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
//import { initializeApp } from "firebase/compat/app";
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
  const firebaseConfig = {
  apiKey: "AIzaSyAdea1qS3btWNPitN3b95C2WYhqZSjRbWU",
  authDomain: "react-hook-blog-c5056.firebaseapp.com",
  projectId: "react-hook-blog-c5056",
  storageBucket: "react-hook-blog-c5056.appspot.com",
  messagingSenderId: "359454347558",
  appId: "1:359454347558:web:0fcf3ba25152ec547ef1e7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore= firebase.firestore();