// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider,signInWithEmailAndPassword , createUserWithEmailAndPassword} from "firebase/auth";
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBgIUZMDZ1xCSpH9ceBpuY5VFcxCL3QGPA",
  authDomain: "e-commerce-db-bf0cd.firebaseapp.com",
  projectId: "e-commerce-db-bf0cd",
  storageBucket: "e-commerce-db-bf0cd.appspot.com",
  messagingSenderId: "885961642530",
  appId: "1:885961642530:web:4f52e70f25b85c1984b07b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleprovider = new GoogleAuthProvider();
googleprovider.setCustomParameters({prompt:"select_account"})


export const Auth = getAuth(); // is a singleton that keeps track whether the user is correctly authenticated of not throughout the application
export const signInWithGoogle = () => signInWithPopup(Auth,googleprovider);
export const signInWithGoogleRedirect = () => signInWithRedirect(Auth,googleprovider);
export const db = getFirestore();

//async function where we create users documents from the values
// we are getting from the authentication
export const createUserDocumentFromAuth = async(userAuth,additionalField) =>{
    const userDocRef = doc(db, 'users',userAuth.uid)
    console.log(userDocRef)
    //user snapshot = > data 
    // google does this async so we are waiting till we get userdoc ref
    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
    //tocheck whether the inside our db the reference or the data related to the reference
    // exists 
    //flow => if there is any relevant data give it back or create it
    console.log(userSnapshot.exists())
    
    //does not exits
    if(!userSnapshot.exists()){
        //get the name and email from userAuth
        //make a date on when its created
        const {displayName,email} = userAuth;
        const createdDate = new Date();

        //setting the doc or creating the document
        try{
            await setDoc(userDocRef,{displayName,email,createdDate,...additionalField})
        }
        catch(error){
            console.log('error Creating the user',error.message);
        }
        // if user data exists 
        return userDocRef

    }
    
}

export const createUserAuthFromEmailAndPassword = async(email,password) => {
    if(!email || !password) return;

    return await(createUserWithEmailAndPassword(Auth,email,password))



}

export const SignInUserAuthFromEmailAndPassword = async(email,password) => {
    if(!email || !password) return;

    return await(signInWithEmailAndPassword(Auth,email,password))



}


// flow pesudocode

// if user data exists 
// return userDocRef

// does not exists{
//     create / set the document with the data from userAuth in my collection
// }


// => userDocRef->collection maari 
// userSnapshot -> document maari 
// try block code -> we are setting the data to the db 