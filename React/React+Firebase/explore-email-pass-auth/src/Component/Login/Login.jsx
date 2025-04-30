import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, {  useRef, useState } from "react";
import { auth } from "../../firebase.init";
import { Link } from "react-router";

const Login = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef();
  const handleForgetPass = () => {
    console.log(emailRef.current.value);
    const email = emailRef.current.value;
    setError("");
    setSuccess(false);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Password reset email sent!");
        setSuccess(true);
      })
      .catch((error) => {
        console.error("Error sending password reset email:", error);
        setError(error.message);
      });
  };
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
        if (result.user.emailVerified) {
          console.log("Email verified");
          setSuccess(true);
        } else {
          console.log("Email not verified");
          setError("Please verify your email address before logging in.");
        }
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div>
      <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl mt-20">
        <div className="card-body">
          <h1 className="text-3xl font-bold">Login now!</h1>
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              required
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div onClick={handleForgetPass}>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
          <p>
            New to this website? Please{" "}
            <Link className="text-blue-600" to="/register">
              Register
            </Link>
          </p>
          {error && (
            <div className="alert alert-error shadow-lg mt-4">
              <p>
                <span>{error}</span>
              </p>
            </div>
          )}
          {success && (
            <p className="text-green-500 text-sm mt-2">Log in successful</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
