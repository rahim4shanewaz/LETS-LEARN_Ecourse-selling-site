// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3qizVfQqXS3qqPfsAVzLwQVZUlunoLWs",
  authDomain: "lets-learn-web-auth.firebaseapp.com",
  projectId: "lets-learn-web-auth",
  storageBucket: "lets-learn-web-auth.appspot.com",
  messagingSenderId: "707905755676",
  appId: "1:707905755676:web:e5fbf2272424a271f3ddd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;