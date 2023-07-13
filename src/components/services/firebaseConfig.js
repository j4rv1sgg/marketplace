import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDx5974v5jXPlvHoKs4s3CtqZcKkuNML4w",
    authDomain: "cars-a073e.firebaseapp.com",
    projectId: "cars-a073e",
    storageBucket: "cars-a073e.appspot.com",
    messagingSenderId: "860817248184",
    appId: "1:860817248184:web:78abf617d45ef673d6494d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
export const provider = new GoogleAuthProvider()