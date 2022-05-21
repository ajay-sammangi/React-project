// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
}from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDyhQfWJx4HK4j3eU-LuCTv64LXrETMpXo",
  authDomain: "capstone-project-7aef7.firebaseapp.com",
  projectId: "capstone-project-7aef7",
  storageBucket: "capstone-project-7aef7.appspot.com",
  messagingSenderId: "642578758136",
  appId: "1:642578758136:web:cd660761af48cf8ae6be0d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider=new GoogleAuthProvider();

// const googleProvider=new Google

googleProvider.setCustomParameters({
    prompt:"select_account"
})

export const auth=getAuth();
export const signInWithGooglePopup =() => signInWithPopup(auth,googleProvider);

export const signInWithGoogleRedirect=() => signInWithRedirect(auth,googleProvider);

export const db=getFirestore();

export const createUserDocumentFromAuth= async (userAuth) =>{
    const userDocRef =doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot =await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const {displayName, email}= userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
            });
        }catch(error){
            console.log('error creating the user',error.message);
        }

    }
    return userDocRef;
}
