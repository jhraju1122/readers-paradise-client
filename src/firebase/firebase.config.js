// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaK3bQPVUdrj_2waCzexlF7C-uGbyOIQM",
  authDomain: "readers-paradise-client.firebaseapp.com",
  projectId: "readers-paradise-client",
  storageBucket: "readers-paradise-client.firebasestorage.app",
  messagingSenderId: "1083120789291",
  appId: "1:1083120789291:web:d0c420482e6c074cf3076e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);