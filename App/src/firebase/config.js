// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqDr5MWHpcumwttSBMN7aLOcmmqIT0RjY",
  authDomain: "coderhouse-ecommerce-2f3c3.firebaseapp.com",
  projectId: "coderhouse-ecommerce-2f3c3",
  storageBucket: "coderhouse-ecommerce-2f3c3.appspot.com",
  messagingSenderId: "539149337207",
  appId: "1:539149337207:web:b7126b30d654e5b63d3c72",
  measurementId: "G-X28ZBDG5KC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function getFirestoreApp(){
    return app
}