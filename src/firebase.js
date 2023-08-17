import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAFKRH7zhfT_CjkMm8zlBhOtGZkP6FlPjc",
  authDomain: "chat-app-project-dadbe.firebaseapp.com",
  projectId: "chat-app-project-dadbe",
  storageBucket: "chat-app-project-dadbe.appspot.com",
  messagingSenderId: "1046702703093",
  appId: "1:1046702703093:web:fb1289d3305ee07277a0bc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();