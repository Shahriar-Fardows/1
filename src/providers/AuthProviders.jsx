import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithPopup, GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
import app from '../firebase/firebase.config';


  export const AuthContext = createContext();
  const auth = getAuth(app);


const AuthProviders = ({children}) => {
  const [user, setUser] = useState([]);

    const [googleUser,setGoogleUser] = useState([]);

    const [loading,setLoading] = useState(true)
    const provider = new GoogleAuthProvider();

    const googleSignIn = ()=>{

        return signInWithPopup(auth,provider)
    }

    const createUser = (email, password) => {
      
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email,password)=>{
      setLoading(true)
  
      return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = ()=>{
      setLoading(true)
      return signOut(auth,provider)
    }

      // onAuthStatechange

    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser);
        setGoogleUser(currentUser);
        setUser(currentUser)
        // setUser(currentUser);
        setLoading(false)
  
      });
      return () => {
        unSubscribe();
      };
    }, []);

    const authInfo = {
        googleUser,
        user,
        loading,
        createUser,
        googleSignIn,
        signIn,
        logOut,
      };

    return (
       <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

AuthProviders.propTypes = {
    
};

export default AuthProviders;