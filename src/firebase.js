import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4kIl5w1_mCIBSW275zL6uEM-Q-r5OtyA",
  authDomain: "hip-myth-362309.firebaseapp.com",
  projectId: "hip-myth-362309",
  storageBucket: "hip-myth-362309.appspot.com",
  messagingSenderId: "628091555682",
  appId: "1:628091555682:web:fb3db2f0106765a817663b",
  measurementId: "G-S5V17XQX8B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
