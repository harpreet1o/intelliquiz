import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCIedCFAsq7hiqL3IMhC628iiiSu1G993E",
  authDomain: "intelliquiz-f64b7.firebaseapp.com",
  projectId: "intelliquiz-f64b7",
  storageBucket: "intelliquiz-f64b7.appspot.com",
  messagingSenderId: "1004202629248",
  appId: "1:1004202629248:web:47f6666ca2f3a2166d6e65",
  measurementId: "G-N06BVR5ZY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };
