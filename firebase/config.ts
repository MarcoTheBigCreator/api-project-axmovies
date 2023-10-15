// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXsCPR_eHeChBwK8f95yHBzWolXM4hGQA",
  authDomain: "axbooks-cc9c2.firebaseapp.com",
  databaseURL: "https://axbooks-cc9c2-default-rtdb.firebaseio.com",
  projectId: "axbooks-cc9c2",
  storageBucket: "axbooks-cc9c2.appspot.com",
  messagingSenderId: "654378294987",
  appId: "1:654378294987:web:72c0a11de7c3a4168bc54e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
