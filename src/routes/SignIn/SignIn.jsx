import {useState} from "react"
import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/Firebase"
import SignUpForm from "../../components/SignUp/SignUp"

const SignIn = () => {
    const logGoogleUser = async () => {
       const {user} = await signInWithGooglePopup()
       const userDocRef = await createUserDocumentFromAuth(user)
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}> Sign in with Google Popup </button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;