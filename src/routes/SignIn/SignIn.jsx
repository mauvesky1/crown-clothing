import {useState} from "react"
import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/Firebase"
import SignUpForm from "../../components/SignUp/SignUp"
import SignInForm from "../../components/SignIn/SignIn"

const SignIn = () => {
    const logGoogleUser = async () => {
       const {user} = await signInWithGooglePopup()
       const userDocRef = await createUserDocumentFromAuth(user)
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}> Sign in with Google Popup </button>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default SignIn;