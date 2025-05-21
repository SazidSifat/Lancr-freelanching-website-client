import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)





    // google 
    const provider = new GoogleAuthProvider()
    const signinWithGoogle = () => {
        return signInWithPopup(auth, provider)
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