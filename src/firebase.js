// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHUsUnkjB8yyIrzNz2-o4g4o4WiIK_as0",
  authDomain: "gallery-app-a38d2.firebaseapp.com",
  projectId: "gallery-app-a38d2",
  storageBucket: "gallery-app-a38d2.appspot.com",
  messagingSenderId: "653895683136",
  appId: "1:653895683136:web:d1824278ea43f9395123a5",
  measurementId: "G-SVB34TCH8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;