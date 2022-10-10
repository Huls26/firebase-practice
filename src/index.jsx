import { initializeApp } from "firebase/app";
import { 
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
 } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAIGNob0Q-9OtBvCOWUPot-Jk71FaZjg3A",
    authDomain: "fir-9-huls.firebaseapp.com",
    projectId: "fir-9-huls",
    storageBucket: "fir-9-huls.appspot.com",
    messagingSenderId: "466103283954",
    appId: "1:466103283954:web:047b9849e443982d64e06b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, "books");

export default db;
export { colRef };

// review lesson #4 net ninja
// https://www.youtube.com/watch?v=s1frrNxq4js&list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb&index=4