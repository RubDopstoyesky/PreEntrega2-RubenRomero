// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzTCh7WU2GTuPzm4-7Z5fr5ZB_VwN9JbE",
    authDomain: "proyectofinalromeroruben.firebaseapp.com",
    projectId: "proyectofinalromeroruben",
    storageBucket: "proyectofinalromeroruben.appspot.com",
    messagingSenderId: "552021144389",
    appId: "1:552021144389:web:d37393b7e540cc5588c42c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)