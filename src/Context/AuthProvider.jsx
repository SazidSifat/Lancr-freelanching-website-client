import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)





    // google 
    const provider = new GoogleAuthProvider()
    const signinWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    //create account with email pass 
    const emailPassRegister = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //email pass login 
    const emailPassLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //logout
    const signOutUser = () => {
        return signOut(auth)
    }


    //observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (cUser) => {
            setLoading(false)
            setUser(cUser)
        })

        return unsubscribe;

    }, [])







    const info = {
        emailPassRegister,
        emailPassLogin,
        user,
        signinWithGoogle,
        loading,
        setLoading,
        signOutUser
    }
    return (
        <AuthContext value={info}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;