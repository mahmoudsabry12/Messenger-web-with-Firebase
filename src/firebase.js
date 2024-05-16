// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCGXzDK16SRnMENaPUHn0QKa7zUx30ryKg",
  authDomain: "chat-8462b.firebaseapp.com",
  projectId: "chat-8462b",
  storageBucket: "chat-8462b.appspot.com",
  messagingSenderId: "895341840622",
  appId: "1:895341840622:web:0e12a82a1b08a6d09e4bff"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()


// const firebaseConfig = {
//   apiKey: "AIzaSyAC6zqKpwD7i19XK6mo4UYZA2OWtn4CGFY",
//   authDomain: "chatweb-7381f.firebaseapp.com",
//   projectId: "chatweb-7381f",
//   storageBucket: "chatweb-7381f.appspot.com",
//   messagingSenderId: "125581640327",
//   appId: "1:125581640327:web:0510aec82e9f81e5c6ee22"
// };


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration