import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIV5G80p0nWhxWdAgvrI2TTGgfr2KSyCU",
  authDomain: "my-vue-website-39e31.firebaseapp.com",
  projectId: "my-vue-website-39e31",
  storageBucket: "my-vue-website-39e31.appspot.com",
  messagingSenderId: "1071154496110",
  appId: "1:1071154496110:web:bcf0d2673729be78e6dc7f",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const projectAuth = firebaseApp.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp, projectAuth };
