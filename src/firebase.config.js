import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPbDcE71HTzOz6tGTKX_WIq3OKXRYzzqo",
  authDomain: "windbnb-2a2d3.firebaseapp.com",
  projectId: "windbnb-2a2d3",
  storageBucket: "windbnb-2a2d3.appspot.com",
  messagingSenderId: "839715219639",
  appId: "1:839715219639:web:3d951e73810f2cc140c532",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
