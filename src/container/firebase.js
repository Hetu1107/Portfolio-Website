import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDamTLYEkwJko7_En95PzHl9-5x3trO684",
  authDomain: "portfolio-f2252.firebaseapp.com",
  projectId: "portfolio-f2252",
  storageBucket: "portfolio-f2252.appspot.com",
  messagingSenderId: "200906759979",
  appId: "1:200906759979:web:ad9a6e8e8d3f1a5e86ef6e",
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const database = firebase.database();

export { auth, provider, storage, database };
export default db;
