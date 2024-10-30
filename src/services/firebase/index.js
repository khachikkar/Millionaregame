// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiqGjgQnsjx86MO6lnKl0wciGjn2fBS_c",
  authDomain: "millionaregame-5f3d7.firebaseapp.com",
  projectId: "millionaregame-5f3d7",
  storageBucket: "millionaregame-5f3d7.appspot.com",
  messagingSenderId: "1053143140392",
  appId: "1:1053143140392:web:1213cded731eccda594d1d",
  measurementId: "G-9CRVQ7L09Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app) // createing a firebase databasa


export {
  auth,
  db
}
