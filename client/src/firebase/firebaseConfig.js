// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCStBQbLNpG9zf2WLLLgjOEmtaPwDC_t18",
  authDomain: "chatappdemo-c2111.firebaseapp.com",
  databaseURL: "https://chatappdemo-c2111-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chatappdemo-c2111",
  storageBucket: "chatappdemo-c2111.appspot.com",
  messagingSenderId: "46798470918",
  appId: "1:46798470918:web:169b13891cce4a72202887"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()