// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOtuPhzVpTxWPiZemQuXcqoEfSgH7URV0",
  authDomain: "car-services-f20c6.firebaseapp.com",
  projectId: "car-services-f20c6",
  storageBucket: "car-services-f20c6.appspot.com",
  messagingSenderId: "449988851705",
  appId: "1:449988851705:web:d15a9de129676c2060ef28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;