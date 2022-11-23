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
  // apiKey: "AIzaSyB-lbNqFQukk9M6yDSLV274Rym5W-J8IYk",
  // authDomain: "norse-voice-357806.firebaseapp.com",
  // projectId: "norse-voice-357806",
  // storageBucket: "norse-voice-357806.appspot.com",
  // messagingSenderId: "135461170288",
  // appId: "1:135461170288:web:a0bebbc6a4dac2dabad8b5",
  // measurementId: "G-NRQX6Z6H9N"
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
// // provider.setCustomParameters({
// //   prompt: "consent",
// //   tenant: "c0e04a3e-df4e-4373-a10b-9a90b8689474"
// });

const auth = getAuth(app);

export const signInWithMicrosoft = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result?._tokenResponse);
      // setAccessToken(result?._tokenResponse);
      alert(result._tokenResponse.firstName);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signInWithMicrosoftredirect = () => {
    signInWithRedirect(auth, provider)
    //   .then((result) => {
    //     console.log(result?._tokenResponse);
    //     // setAccessToken(result?._tokenResponse);
    //     alert(result._tokenResponse.firstName);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
// FirebaseError: Firebase: Error getting access token
// from microsoft.com, OAuth2 redirect uri is: https://knowit-7c05d.firebaseapp.com/__/auth/handler,
// response: OAuth2TokenResponse{params: error=invalid_client&
// error_description=AADSTS7000215:%20
// Invalid%20client%20secret%20provided.%20Ensure%20the%20secret%20
// being%20sent%20in%20the%20request%20is%20
// the%20client%20secret%20value,%20not%20the%20
// client%20secret%20ID,%20for%20a%20secret%20added
// %20to%20app%20'e8f239da-db2a-42df-89c5-4af60724453e'.
