import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDK8Fnb-GlgjQpH41ocz0U5JsEcTJTYkus",
    authDomain: "portfolio-fb61c.firebaseapp.com",
    databaseURL: "https://portfolio-fb61c-default-rtdb.firebaseio.com",
    projectId: "portfolio-fb61c",
    storageBucket: "portfolio-fb61c.appspot.com",
    messagingSenderId: "390617173313",
    appId: "1:390617173313:web:3a85975e516ce7bd4925c0"
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