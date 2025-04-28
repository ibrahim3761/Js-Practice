import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase.init";
import { Link } from "react-router";

const Login = () => {
const [success, setSuccess] = useState(false);
const[error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setSuccess(false);
    setError("");
    
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div>
      <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold">Login now!</h1>
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
          <p>New to this website? Please <Link className="text-blue-600" to="/register">Register</Link></p>
          {
            error && (
              <div className="alert alert-error shadow-lg mt-4">
                <p>
                  <span>{error}</span>
                </p>
              </div>
            )
          }
          {success && (
          <p className="text-green-500 text-sm mt-2">
            Log in successful
          </p>
        )}
        </div>
      </div>
    </div>
  );
};

export default Login;
