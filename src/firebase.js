import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBkqkB28TpifXS-Cmb-39zSugPRDRb7SAw",
  authDomain: "health-sun.firebaseapp.com",
  projectId: "health-sun",
  storageBucket: "health-sun.appspot.com",
  messagingSenderId: "413589260006",
  appId: "1:413589260006:web:8faebde9fa6ea9c4bfdd27",
  measurementId: "G-NHD69K4WL5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();

export { app, auth, storage };