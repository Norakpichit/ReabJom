// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCzBPnrRRIJh2qpd2P_r-WNB99qiGPurZY",
//   authDomain: "reabjom-d3629.firebaseapp.com",
//   projectId: "reabjom-d3629",
//   storageBucket: "reabjom-d3629.appspot.com",
//   messagingSenderId: "664813287365",
//   appId: "1:664813287365:web:dc18ae29c3945af8bb3dac",
//   measurementId: "G-LH8MMNKN5L",
// };

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx-tewL7tyDnay4KNq396C0GE3miw3Lr8",
  authDomain: "reabjom-f7d82.firebaseapp.com",
  projectId: "reabjom-f7d82",
  storageBucket: "reabjom-f7d82.appspot.com",
  messagingSenderId: "948338939941",
  appId: "1:948338939941:web:38703375b68f54f1e347cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db };
export {auth};
