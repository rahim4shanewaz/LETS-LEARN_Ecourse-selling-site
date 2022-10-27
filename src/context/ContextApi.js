import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/fireBase.config';





export const AuthContext = createContext();

const auth = getAuth(app);






const ContextApi = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const signInWithGit = () =>{
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider);
    }
    
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,
            currentUser => {
                setUser(currentUser);
                setLoading(false);
            })
            return () =>{
                unsubscribe();
            }
    },[])
    

    // const user ={displayName: 'ja ese tay'}
    const authInfo = {user, createUser ,signIn, logOut, signInWithGoogle,signInWithGit, loading};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default ContextApi;