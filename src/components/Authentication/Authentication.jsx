import {useState} from "react";
import "./Authentication.scss"
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/Firebase"
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button"

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword:""
}
const Authentication = () => {
    const [formFields, setFormFields] =useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)

    }
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if(password !== confirmPassword){
            alert("Password Mismatch")
            return;
        }
        try {
            const {user} = createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields();
        } catch(error){
            console.log(error.code, "Error in signup")            
        }
    }
    return (
    <div className="sign-up-container">
        <h2>Don't have an account?</h2>
        <span> Sign up with your email and password </span>
        <form onSubmit={handleSubmit}>
            <FormInput
                label="Display Name"
                type="text" 
                name="displayName" 
                value={displayName} 
                onChange={handleChange} 
                required />
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
            <FormInput
                            label="Confirm Password"
                            type="password" 
                            name="confirmPassword" 
                            value={confirmPassword} 
                            onChange={handleChange} 
                            required />
            <Button type="submit">Sign Up</Button>
        </form>
    </div>
    )
};

export default Authentication;