import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs55mrLCSCOJuC8jg1nYKJi6aORucu7aw",
  authDomain: "practice-firebase-9e54d.firebaseapp.com",
  projectId: "practice-firebase-9e54d",
  storageBucket: "practice-firebase-9e54d.firebasestorage.app",
  messagingSenderId: "181070365271",
  appId: "1:181070365271:web:eb3f7e3edcca641691d912"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const auth = getAuth(app);
export default auth;