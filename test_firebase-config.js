// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  OAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect
} from "firebase/auth";
import { getAnalytics, firebaseAuth } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsTcyU26hvpjPiVOr2DDzQUP8xMing_uo",
    authDomain: "knowit-7c05d.firebaseapp.com",
    projectId: "knowit-7c05d",
    storageBucket: "knowit-7c05d.appspot.com",
    messagingSenderId: "925339236625",
    appId: "1:925339236625:web:329e77e8bf13b31b6b74b0",
    measurementId: "G-BZ0SMRHSP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var provider = new OAuthProvider("microsoft.com");

const auth = getAuth(app);

export const signInWithGoogle = ({ setAccessToken }) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result?._tokenResponse);
      setAccessToken(result?._tokenResponse);
    })
    .catch((error) => {
      console.log(error);
    });
};
