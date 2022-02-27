// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKLj5VNEYaNRZLeR1dSlVJ4GV5-85fihE",
  authDomain: "rj-my-app.firebaseapp.com",
  projectId: "rj-my-app",
  storageBucket: "rj-my-app.appspot.com",
  messagingSenderId: "652831487385",
  appId: "1:652831487385:web:13da2455a415368ea30f08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)