// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxGHup65XqUdLGnz2l_oXjkke9Wle_Nbw",
    authDomain: "filmy-3312a.firebaseapp.com",
    projectId: "filmy-3312a",
    storageBucket: "filmy-3312a.appspot.com",
    messagingSenderId: "619337604982",
    appId: "1:619337604982:web:3ce87b46d4c88e718fe457"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default getFirestore()




