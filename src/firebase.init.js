// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF3AZ1GJj9DpYGairKUQVD8jF2uI1lyjU",
  authDomain: "dilips-p-hero-assignment-10.firebaseapp.com",
  projectId: "dilips-p-hero-assignment-10",
  storageBucket: "dilips-p-hero-assignment-10.appspot.com",
  messagingSenderId: "872429595703",
  appId: "1:872429595703:web:9fa65ae9c8265089dce3b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
