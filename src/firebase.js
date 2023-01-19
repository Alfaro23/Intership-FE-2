// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyDtv3c1UIKjUXkbPsYoulUmbo87UG-Uo-I",
    authDomain: "hotelproject-d9f01.firebaseapp.com",
    projectId: "hotelproject-d9f01",
    storageBucket: "hotelproject-d9f01.appspot.com",
    messagingSenderId: "329459071940",
    appId: "1:329459071940:web:e8a1df3eefa2f533ab4291"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);