import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase.init";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router";

const Register = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleResister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(email, password);
    setSuccess(false);
    setError("");
    if (!terms) {
      setError("Please accept terms and conditions");
      return;
    }

    // firebase auth create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        // email verification
        sendEmailVerification(auth.currentUser)
          .then(() => {
            // Email verification sent! Now you can display a message to the user
            console.log("Email verification sent!");
            setSuccess(true);
          })
          .catch((error) => {
            console.error("Error sending email verification:", error);
          });
        // update user profile with name and photo
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log("User profile updated successfully!");
          })
          .catch((error) => {
            console.error("Error updating user profile:", error);
          });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-5 border border-gray-300 rounded-lg shadow-md bg-white">
      <h2 className="font-bold text-2xl mb-4">Register</h2>
      <form className="space-y-4" onSubmit={handleResister}>
        {/* Email Feild */}

        <label className="input validator join-item">
          
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
          />
        </label>

        <label className="input validator join-item">
         
          <input
            type="text"
            name="photo"
            placeholder="Your photo URL"
            required
          />
        </label>

        <label className="input validator join-item">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input
            type="email"
            name="email"
            placeholder="mail@site.com"
            required
          />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>

        <br />
        {/* Password Feild */}
        <label className="input validator">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            required
            placeholder="Password"
            minLength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          />
          <button
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className="btn btn-xs"
          >
            {showPassword ? <FaEye /> : <IoMdEyeOff />}
          </button>
        </label>
        <p className="validator-hint hidden">
          Must be more than 8 characters, including
          <br />
          At least one number <br />
          At least one lowercase letter <br />
          At least one uppercase letter
        </p>
        <br />
        <label className="label">
          <input type="checkbox" name="terms"  className="checkbox" />
          Accept Terms and Conditions
        </label>
        <br />
        {/* Submit */}
        <input className="btn btn-primary" type="submit" value="Submit" />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {success && (
          <p className="text-green-500 text-sm mt-2">
            User Created Successfully
          </p>
        )}
      </form>
      <p>Alreay have an account? Please <Link className="text-blue-600" to="/login">Log in</Link></p>
    </div>
  );
};

export default Register;
