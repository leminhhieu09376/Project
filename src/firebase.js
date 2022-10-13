// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjR13W_2UlCJA3s-NO_8FZhqUUipRleNo",
    authDomain: "fir-api-8ba35.firebaseapp.com",
    projectId: "fir-api-8ba35",
    storageBucket: "fir-api-8ba35.appspot.com",
    messagingSenderId: "307511382174",
    appId: "1:307511382174:web:3f0c24d2409ca6c5e3eb8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;
