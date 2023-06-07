import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
   const [User, setUser] = useState(null)
   const [loading, setloading] = useState(true)

   const googleProvider = new GoogleAuthProvider()

   const googleCreatUSer = () => {
      return signInWithPopup(auth, googleProvider)
   }

   const CreatUSerEmail = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
   }

const SignInUSer=(email,password)=>{
   return signInWithEmailAndPassword(auth,email,password)
}

const signOutUSer=()=>{
   return signOut(auth)
}

const updateUser=(name,url)=>{
   console.log(name,url)
   return updateProfile(auth.currentUser,{
      displayName: name, photoURL: url
   })
}

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUSer => {
         setUser(currentUSer)
         setloading(false)
      })
      return () => {
         return unsubscribe
      }
   }, [])

   const resors = {
      googleCreatUSer,
      CreatUSerEmail,
      User,
      SignInUSer,
      signOutUSer,
      updateUser,
      loading

   }
   return (
      <AuthContext.Provider value={resors}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;