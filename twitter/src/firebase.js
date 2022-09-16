import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAdQaLHOz1SS1FVZxtsDq0PAQJJe3p46sk",
    authDomain: "nwitter-129a7.firebaseapp.com",
    projectId: "nwitter-129a7",
    storageBucket: "nwitter-129a7.appspot.com",
    messagingSenderId: "855243383104",
    appId: "1:855243383104:web:79cac0dfcdbaeafafc5aa5"
  };

const app = initializeApp(firebaseConfig);
export const authService = getAuth();
