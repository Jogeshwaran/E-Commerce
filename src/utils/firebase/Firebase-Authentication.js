// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider,signInWithEmailAndPassword , createUserWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";
import {getFirestore,doc,getDoc,setDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore';
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

export const signUserOut = async() => await signOut(Auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(Auth,callback)

// flow pesudocode

// if user data exists 
// return userDocRef

// does not exists{
//     create / set the document with the data from userAuth in my collection
// }


// => userDocRef->collection maari 
// userSnapshot -> document maari 
// try block code -> we are setting the data to the db 


//method that allows to upload these data from shop data into the respective collections in the firestore

//addCollectionAndDocuments => adding some new collection as well as the documents inside that collection
//collectionKey => like users, categories
//objectsToAdd => Json objects that we are going to add 

export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) =>{
    //to create a collection reference similar to the DocumentRef , if there is already reference it ifnores else it creates one for us

    const collectionRef = collection(db, collectionKey);
    //This creates a collection Ref
    //Next we have to decide how to store each of the objects inside of teh new collectionRef as a document
    // writeBatch method for the above step

    const batch = writeBatch(db);
    //batch allows to do diff writes ,deletes,sets
    //we need to create a bunch of set methods to create and set that obj into this collection

    objectsToAdd.forEach((object) =>{
        //create the document refernces
        // object.title.toLowerCase() => key value
        const docRef = doc(collectionRef,object.title.toLowerCase())
        // sets the object that we get from the objectToAdd in the particular Collection and the keyvalue
        // ie in the category collection under the key hats , men women like that it will add the objects
        batch.set(docRef,object)
    })

    await batch.commit();
    console.log('done');
    
}

export const getCategoriesAndDocuments = async () =>{
    // we need a collection Ref from where we get those data
    const collectionRef = collection(db,'categories')

    //We need a query method and getDocs method 
    // generate a query from teh collectionRef

    const q = query(collectionRef);
    // this gives a object from which we can get a snapshot of how its going to be

    const querySnapshot = await getDocs(q)
    // getDocs is the asynchronous ability to fetch the document snapshots that we want

    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot)=>{
        const {title,items} = docSnapshot.data();
        acc[title.toLowerCase()]=items;
        return acc;
    },{})
    return categoryMap;
    // querySnapshot.docs gives array of all individual documents inside i.e hats,men,women
    // we have to reduce over the array to get the structure i.e hats:{
    //     title : 'hats',
    //     items : [{},{}]
    // }
}