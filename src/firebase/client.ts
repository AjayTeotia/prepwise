// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCI4JHHwcRSeFUlZXYj1rqjT6NdHxwod4g",
    authDomain: "prepwise-5e093.firebaseapp.com",
    projectId: "prepwise-5e093",
    storageBucket: "prepwise-5e093.firebasestorage.app",
    messagingSenderId: "85471001262",
    appId: "1:85471001262:web:7c1e7887025df98f5a4b3f",
    measurementId: "G-71CYL3PX7S"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);