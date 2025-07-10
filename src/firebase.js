import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyppos3hBhePTQ4j7rrch02DLVrNQ44ao",
  authDomain: "elisagoncalves-portfolio.firebaseapp.com",
  projectId: "elisagoncalves-portfolio",
  storageBucket: "elisagoncalves-portfolio.appspot.com",
  messagingSenderId: "250676082138",
  appId: "1:250676082138:web:451a3a26cca07e683ffce3",
  measurementId: "G-N52DZVBQL0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 