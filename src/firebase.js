import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnQ8yJwnuVOQlkrYftDukM3CMSogJASA8",
  authDomain: "hajfur.firebaseapp.com",
  projectId: "hajfur",
  storageBucket: "hajfur.firebasestorage.app",
  messagingSenderId: "1061168135946",
  appId: "1:1061168135946:web:93d8944a249e9ba13304f3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);