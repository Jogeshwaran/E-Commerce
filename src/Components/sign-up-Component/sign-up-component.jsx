import { useEffect, useState } from "react"
import { createUserAuthFromEmailAndPassword, createUserDocFromEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/Firebase-Authentication";
import Button from "../button/button-component";
import FormInput from "../form-input/form-input-component";
import './sign-up-styling.scss';
export const SignUp = () => {
    const defaultFormField = {
        displayName : '',
        email : '',
        password : '',
        confirmPassword : ''
    }

    const [formField , setFormField] = useState(defaultFormField);
    const {displayName,email,password,confirmPassword} = formField;
    
        
       

    const resetForm=() =>{
        setFormField(defaultFormField)
    }

         
    const handleSubmit = async(event) =>{
        resetForm();
        event.preventDefault();
        if (password !== confirmPassword){
        alert("Passwords don't match");
        return
        }

        try{
        const response= await createUserAuthFromEmailAndPassword(email,password)
        const userDocRef = await createUserDocumentFromAuth(response.user,{displayName})
        alert("Sign Up sucessfull!!")
        }catch(error){
            if (error.code ==='auth/email-already-in-use'){
                alert('email already in use')
            }else{
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
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign Up with Email and Password</span>
            <div>
                <form onSubmit={handleSubmit}>
                    <FormInput label="Display Name" type="text" required name='displayName' value={displayName} onChange = {onChangeHandler}/>
                    <FormInput label="Email" type="email" required name='email' value={email} onChange = {onChangeHandler}/>
                    <FormInput label = "Password" type="password" required name='password'value={password} onChange = {onChangeHandler}/>
                    <FormInput label = "Confirm Password"type="password" required name='confirmPassword'value={confirmPassword} onChange = {onChangeHandler}/>
                    <Button type="submit" >Sign Up</Button>
                </form>
            </div>
        </div>
    )
}

