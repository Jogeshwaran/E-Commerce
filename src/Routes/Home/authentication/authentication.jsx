import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import { SignIn } from "../../../Components/sign-in-Component/sign-in-component";
import { SignUp } from "../../../Components/sign-up-Component/sign-up-component";
import { Auth, createUserDocumentFromAuth, signInWithGoogle, signInWithGoogleRedirect } from "../../../utils/firebase/Firebase-Authentication";
import '../authentication/authentication-styles.scss'
const Authentication = ( ) =>{
// useEffect(()=>
//     async() => {
//         const response = await getRedirectResult(Auth);
//         //if we get respone from the getredirect result then we are creating a document from it.
//         if (response){
//             const userDocRef = await createUserDocumentFromAuth(response.user)
//         }
//         }

// ,[])
//     const logInGoogleUsers = async() =>{
//         const response = await signInWithGoogle();
//         console.log(response)
//         const userDocRef = await createUserDocumentFromAuth(response.user)
//     }

    

    // const logInGoogleRedirect = async() =>{
    //     const response = await signInWithGoogleRedirect();
    //     console.log(response)
       
    // }
    
    //GoogleRedirect => completely takes the website to a different page and after chosing the email it redirects to our website
    // But our website as its completely redirected it does not keep memory of the previous function so only its not returning anything
    // To tackle this issue
    //  1. use UseEffect hook in the page that returns after the redirect, the hook with empty array runs everytime the compnent is mounted
    //      so after redirecting from the redirected page the website mounts once again at the time it captures the redirected respone.
    //  2. import getRedirectResult and Auth
    //  3. getRedirectResult gives the whether the user is authenticated or not, using auth function
    //  4. in the useeffect hook we can have a async function that gives the response once its redirected

    return(
        <div className="authentication-container">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Authentication;