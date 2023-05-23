// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzBPnrRRIJh2qpd2P_r-WNB99qiGPurZY",
  authDomain: "reabjom-d3629.firebaseapp.com",
  projectId: "reabjom-d3629",
  storageBucket: "reabjom-d3629.appspot.com",
  messagingSenderId: "664813287365",
  appId: "1:664813287365:web:dc18ae29c3945af8bb3dac",
  measurementId: "G-LH8MMNKN5L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
