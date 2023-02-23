import {useState} from "react";
import {createAuthUserWithEmailAndPassword, 
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/Firebase"
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button"
import "./SignIn.scss"


const defaultFormFields = {
    email: "",
    password: "",
    }
const SignInForm = () => {
    const [formFields, setFormFields] =useState(defaultFormFields)
    const {email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)

    }
    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup()
        await createUserDocumentFromAuth(user)
     }
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            resetFormFields();
            console.log(response)
        } catch(error){
            switch(error.code){
                case "auth/wrong-password":
                    alert("incorrect password")
                    break;
                case "auth/user-not-found":
                    alert("No user found")
                    break;
                default:
                    console.log(error.code)
            }
            // if(error.code == "auth/wrong-password"){
            //     alert("incorrect password")
            // }
            // if(error.code == "auth/user-not-found"){
            //     alert("No user found")
            // }
            console.log(error.code, "Error in signIn")            
        }
    }
    return (
    <div className="sign-up-container">
        <h2>Already have an account?</h2>
        <span> Sign in with your email and password </span>
        <form onSubmit={handleSubmit}>
            <FormInput 
                            label="Email"
                            type="email" 
                            name="email" 
                            value={email} 
                            onChange={handleChange} 
                            required />
            
            <FormInput
                            label="Password"
                            type="password" 
                            name="password" 
                            value={password} 
                            onChange={handleChange} 
                            required />
            <div className="buttons-container">
            <Button type="submit">Sign In</Button>
            <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
            </div>
        </form>
    </div>
    )
};

export default SignInForm;