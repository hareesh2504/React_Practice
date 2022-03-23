import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"



const firebaseConfig = {
    apiKey: "AIzaSyDPO4XELuFQUrqPAutuVfkEZgjKji1ccs8",
    authDomain: "auth-2ff04.firebaseapp.com",
    projectId: "auth-2ff04",
    storageBucket: "auth-2ff04.appspot.com",
    messagingSenderId: "940106589056",
    appId: "1:940106589056:web:4be253ddb457e697b79765",
    measurementId: "G-WDSSSX50K2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
