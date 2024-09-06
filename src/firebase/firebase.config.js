// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsrbibVvbgf1GJMvfRlB99o2AVwyntnjE",
  authDomain: "headline-journal-reactauth.firebaseapp.com",
  projectId: "headline-journal-reactauth",
  storageBucket: "headline-journal-reactauth.appspot.com",
  messagingSenderId: "664688086134",
  appId: "1:664688086134:web:dc335e8822c87169596357",
  measurementId: "G-E95HF310M8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;