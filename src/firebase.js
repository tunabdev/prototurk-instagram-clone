// Import the functions you need from the SDKs you need
import React from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import toast from "react-hot-toast";
import { userHandle } from "utils/utils";

//
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrPU5QhOfsl0_IXNp5egjTI_Yb7mvjlvM",
  authDomain: "instagram-clone-3153e.firebaseapp.com",
  projectId: "instagram-clone-3153e",
  storageBucket: "instagram-clone-3153e.appspot.com",
  messagingSenderId: "303712663019",
  appId: "1:303712663019:web:a5be6bbbdbcd51630515ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  userHandle(user || false);
});

export const login = async (email, password) => {
  console.log("login!");
  
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response.user);
  } catch (error) {
    toast.error(error.code);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    toast.error(error.code);
  }
};

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
