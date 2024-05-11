import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBbEqOnyFnBUPqA42w1uIWsOqDOgGXqOBI",
    authDomain: "cv-builder-clg.firebaseapp.com",
    projectId: "cv-builder-clg",
    storageBucket: "cv-builder-clg.appspot.com",
    messagingSenderId: "559107418765",
    appId: "1:559107418765:web:d822e0ebf0c024add7d0c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)  ;
const auth = getAuth(app) ;
const provider = new GoogleAuthProvider() ;

export {auth,provider}