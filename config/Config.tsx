// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaMbxu3ALNC1RQkWAA-yop-zsyG7c94lM",
  authDomain: "evaluacion-4f263.firebaseapp.com",
  databaseURL: "https://evaluacion-4f263-default-rtdb.firebaseio.com",
  projectId: "evaluacion-4f263",
  storageBucket: "evaluacion-4f263.appspot.com",
  messagingSenderId: "855954965242",
  appId: "1:855954965242:web:b2c293391fa6eb77bf7f43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);