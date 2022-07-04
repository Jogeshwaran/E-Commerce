import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener, signUserOut } from "../utils/firebase/Firebase-Authentication";

//actual value we want to acess
export const userContext = createContext({
   currentUser : null,
   setCurrentUser : () =>null



})

//actual component for wrapping
export const UserProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const value  = {currentUser,setCurrentUser}

    //signUserOut();
    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
            if(user){
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user);
        })
        return unsubscribe
    },[])

    return <userContext.Provider value={value}>{children}</userContext.Provider>

}