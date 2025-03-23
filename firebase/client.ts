import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPIw2p_eKwoE4b-Rl6L2h7Pj2HAqs8470",
  authDomain: "interviewinator.firebaseapp.com",
  projectId: "interviewinator",
  storageBucket: "interviewinator.firebasestorage.app",
  messagingSenderId: "695617561459",
  appId: "1:695617561459:web:20f7d686cbbce88d9b9b06",
  measurementId: "G-9X1QS1VCW9",
};


const app = !getApps.length?initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app)
export const db = getFirestore(app);
