// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJDsSy3D427oN_Xj4QBa4Pfh01dzWmK3k",
  authDomain: "urbancycle-7b433.firebaseapp.com",
  projectId: "urbancycle-7b433",
  storageBucket: "urbancycle-7b433.firebasestorage.app",
  messagingSenderId: "920403498586",
  appId: "1:920403498586:web:517f61cbcfaaa5bb8caa63",
  measurementId: "G-R3BFXXK6EL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);