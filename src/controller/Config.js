
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsbv1pb_Us-t5MMrIiIfTTkETeo9QsYXQ",
  authDomain: "surveys-d147b.firebaseapp.com",
  projectId: "surveys-d147b",
  storageBucket: "surveys-d147b.appspot.com",
  messagingSenderId: "822541514863",
  appId: "1:822541514863:web:6994628f39de18ce0d759a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export default db;