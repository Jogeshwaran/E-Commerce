import { useEffect, useState } from "react"
import { createUserAuthFromEmailAndPassword, signInWithGoogle,createUserDocFromEmailAndPassword, createUserDocumentFromAuth, SignInUserAuthFromEmailAndPassword } from "../../utils/firebase/Firebase-Authentication";
import Button from "../button/button-component";
import FormInput from "../form-input/form-input-component";
import './sign-in-styling.scss';

export const SignIn = () => {
    const defaultFormField = {
        email : '',
        password : '',
    }

    const [formField , setFormField] = useState(defaultFormField);
    const {email,password} = formField;
    
        
    const logInGoogleUsers = async() =>{
        const response = await signInWithGoogle();
        console.log(response)
        const userDocRef = await createUserDocumentFromAuth(response.user)
    }

    const resetForm=() =>{
        setFormField(defaultFormField)
    }

         
    const handleSubmit = async(event) =>{
        resetForm();
        event.preventDefault();
        
        try{
            const response = await SignInUserAuthFromEmailAndPassword(email,password)
            alert('sign in sucessfull')
        
        }catch(error){
            
            switch (error.code) {
                case "auth/user-not-found":
                    alert('User Not Found')
                    break;
                case "auth/wrong-password":
                    alert('Wrong Password')
                    break;
                default:
                    console.log(error)
                  
            }
        }
        
    }
    const onChangeHandler = (event) => {
        const {name,value} = event.target;
        console.log({...formField})
        setFormField({...formField,[name]:value})
        // {for (const key in formField){
        //     setFormField({name:value})
        // }}
        console.log(name,value)
   

    }
    return(
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign In with Email and Password</span>
            <div>
                <form onSubmit={handleSubmit}>
                    <FormInput label="Email" type="email" required name='email' value={email} onChange = {onChangeHandler}/>
                    <FormInput label = "Password" type="password" required name='password'value={password} onChange = {onChangeHandler}/>
                    <div className="button-containers">
                    <Button type="submit" >Sign In</Button>
                    <Button type="button" onClick = {logInGoogleUsers} buttonType = "google">Google Sign In</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

