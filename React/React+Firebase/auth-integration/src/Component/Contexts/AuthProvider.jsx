import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from "../../firebase.init";


const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {


    

    const[user,setUser] = useState(null)
    const [loading,setLoading]= useState(true)

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
   
    const googleLogIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth,GoogleProvider)
    }

    // onAuthStateChanged(auth,(currentUser)=>{
    //    if(currentUser){
    //     console.log("there is a user",currentUser);
    //    }
    //    else{
    //     console.log("NO user");
        
    //    } 
    // })
    const signOutUser =()=>{
        setLoading(true);
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return()=>{
            unSubscribe()
        }
    },[])
    
    
    const userInfo = {
        user,
        loading,
        createUser,
        logIn,
        signOutUser,
        googleLogIn
    }


    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;