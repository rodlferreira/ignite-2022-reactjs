// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAskAo0I0M8V2LBxdVn7c8T-TAWMayAfPY",
  authDomain: "my-portfolio-rodlferreira-dev.firebaseapp.com",
  projectId: "my-portfolio-rodlferreira-dev",
  storageBucket: "my-portfolio-rodlferreira-dev.appspot.com",
  messagingSenderId: "204431364073",
  appId: "1:204431364073:web:e07e1d688cbe8f6b570578",
  measurementId: "G-6E6PN3E9JS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);