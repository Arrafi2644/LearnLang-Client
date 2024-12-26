import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';
import axios from 'axios';

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [allTutors, setAllTutors] = useState([])

    const provider = new GoogleAuthProvider()

    const signupUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (userData) => {
        setLoading(true)
        return updateProfile(auth.currentUser, userData)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log("user", currentUser?.email);
            if(currentUser?.email){
                const user = {email: currentUser.email};

                axios.post('https://learn-lang-server-rose.vercel.app/jwt', user, {withCredentials: true})
                .then(res => {
                    console.log("Login ", res.data)
                    setLoading(false)
            })
            }
             else{
                axios.post('https://learn-lang-server-rose.vercel.app/logout', {}, {withCredentials: true})
                .then(res => {
                    console.log("Logout ", res.data)
                    setLoading(false)
                })
             }

        })

        return () => {
            unsubscribe()
        }
    }, [])



    const authInfo = {
        user,
        signupUser,
        updateUser,
        loginUser,
        signInWithGoogle,
        logout,
        allTutors,
        setAllTutors,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;