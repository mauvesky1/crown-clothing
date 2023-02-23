import {initializeApp } from 'firebase/app'
import {
    getAuth, signInWithPopup, GoogleAuthProvider, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword
   } from "firebase/auth"
import {
getFirestore, 
doc,
getDoc,
setDoc
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB8dgA9Qfxu9Yp7CsC3MhAPSmXVk4_24R8",
    authDomain: "crown-clothing-30c05.firebaseapp.com",
    projectId: "crown-clothing-30c05",
    storageBucket: "crown-clothing-30c05.appspot.com",
    messagingSenderId: "1089823536190",
    appId: "1:1089823536190:web:84a927cb79d1be28f50d6f"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
  export const db = getFirestore()
  export const createUserDocumentFromAuth = async (
    userAuth, additionalInformation = {}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, "users", userAuth.uid);
    console.log(userDocRef)
    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot)
    console.log(userSnapShot.exists())

    if(!userSnapShot.exists()){
      const { displayName, email} = userAuth;
      const createdAt = new Date();
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation
        })
      }catch(error){
       console.log("error creating the user", error.message)
      }
    }
    return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password ) return;
    try{
      const result = await createUserWithEmailAndPassword(auth, email, password)
      return result
    } catch(error){
      if(error.code == "auth/email-already-in-use"){
        alert("Email already in use, create account failed")
    }else{
        console.log(error.code)
        console.log("Error here")
    }
    }
  }
  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
  }