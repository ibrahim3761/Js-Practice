import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../Firebase/firebase.init';

const Login = () => {
    const[user,setUser] = useState();

    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handlegithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then((result) => {
            console.log("User signed in with Github: ", result);
            setUser(result.user);
        })  
        .catch((error) => {
            console.error("Error signing in with Github: ", error);
        });
    }

    const handlegoogleSignIn = () => {
        // Google sign-in logic here
        console.log("Google Sign In");
        signInWithPopup(auth, provider)
        .then((result)=>{
            console.log("User signed in with Google: ", result);
            setUser(result.user);
        })
        .catch((error) => {
            console.error("Error signing in with Google: ", error);
        });
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log("User signed out successfully");
            setUser(null);
        })
        .catch((error) => {
            console.error("Error signing out: ", error);
        });
    }

    return (
        <div>
            <h2>Please log in</h2>
            
            
            {
                user ?  <button onClick={handleSignOut}>Sign Out</button> :<>
                 <button onClick={handlegoogleSignIn}>Sign in with Google</button>
                 <button onClick={handlegithubSignIn}>Sign in with Github</button>
                </>
            }
            {user && (
                <div>
                    <h3>User Information:</h3>
                    <p>Name: {user.displayName}</p>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="User" />
                </div>
            )}
        </div>
    );
};

export default Login;