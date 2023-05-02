// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZwgK6hfnGYRd-wC36ReNiWs5rPiQURqE",
  authDomain: "ani-media-39f38.firebaseapp.com",
  projectId: "ani-media-39f38",
  storageBucket: "ani-media-39f38.appspot.com",
  messagingSenderId: "823433961206",
  appId: "1:823433961206:web:0bee07020d8cdad67016d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}
