import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, setDoc, collection, addDoc, getDoc, getDocs, updateDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCLyA47f37pYmIvBPg3GLxgC99V03TP-ZE",
    authDomain: "lumosystechnologies-com.firebaseapp.com",
    projectId: "lumosystechnologies-com",
    storageBucket: "lumosystechnologies-com.appspot.com",
    messagingSenderId: "1043513635291",
    appId: "1:1043513635291:web:2cce0de51db37ed09f37fe",
    measurementId: "G-Y5FDDHRNEJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
export { storage, auth, app, db, collection, setDoc, getDoc, addDoc, getFirestore, getDocs, updateDoc, doc };