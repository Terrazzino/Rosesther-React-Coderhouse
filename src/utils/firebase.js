// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpkkKuS2eIH1VDLgvoDl3wL1v1pjfG89c",
  authDomain: "react-cerveceria.firebaseapp.com",
  projectId: "react-cerveceria",
  storageBucket: "react-cerveceria.appspot.com",
  messagingSenderId: "890574176017",
  appId: "1:890574176017:web:3b43073bb09dc85c49d6b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Instancia con la base de datos

export const db = getFirestore(app);