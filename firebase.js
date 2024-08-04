// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACeLMDjhqQ1el93_kyABZm2q_iw4SoOVE",
  authDomain: "pantry-tracker-53917.firebaseapp.com",
  projectId: "pantry-tracker-53917",
  storageBucket: "pantry-tracker-53917.appspot.com",
  messagingSenderId: "748267006091",
  appId: "1:748267006091:web:c3b7753016de573be50c8e",
  measurementId: "G-DP9JQVTL2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}