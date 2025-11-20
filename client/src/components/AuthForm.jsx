import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  // SIGN UP STATE
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    status: "pending",
  });

  // SIGN IN STATE
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  // HANDLE SIGN UP INPUTS
  const handleSignUpChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  // HANDLE SIGN IN INPUTS
  const handleSignInChange = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  // SIGN UP REQUEST
  const handleSignUpSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        signUpData
      );

      alert(res.data.message);
      setIsSignUp(false); // switch to SignIn
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  // SIGN IN REQUEST
  const handleSignInSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/signin",
        signInData
      );

      // ADMIN LOGIN
      if (res.data.role === "admin") {
        navigate("/admin-dashboard");
        return;
      }

      // USER LOGIN
      if (res.data.role === "user") {
        navigate("/dashboard");
        return;
      }
    } catch (err) {
      alert(err.response?.data?.message || "Sign in failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-5xl h-[550px] rounded-3xl bg-slate-800/70 border border-slate-700 backdrop-blur-3xl shadow-2xl overflow-hidden flex"
      >
        {/* BLUE SLIDING PANEL */}
        <motion.div
          animate={{ x: isSignUp ? "100%" : "0%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 
          z-20 flex flex-col justify-center items-center text-center px-8"
        >
          <h2 className="text-3xl font-extrabold mb-4">
            {isSignUp ? "Join Us Today" : "Welcome Back!"}
          </h2>

          <p className="text-slate-200 mb-8">
            {isSignUp
              ? "Create your account to get started."
              : "Sign in to continue where you left off."}
          </p>

          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="px-6 py-2 bg-gradient-to-br from-slate-700 via-slate-950 to-slate-600 
            border border-white rounded-full font-semibold 
            hover:from-slate-800 hover:via-slate-700 hover:to-slate-700 transition-all"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </motion.div>

        {/* FORMS SLIDER */}
        <motion.div
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex w-[200%] h-full"
        >
          {/* SIGN UP FORM */}
          <div className="w-1/2 flex flex-col justify-center items-center p-10">
            <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
            <form className="flex flex-col w-80 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleSignUpChange}
                className="p-3 rounded-xl bg-slate-700 text-white placeholder-slate-400"
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleSignUpChange}
                className="p-3 rounded-xl bg-slate-700 text-white placeholder-slate-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleSignUpChange}
                className="p-3 rounded-xl bg-slate-700 text-white placeholder-slate-400"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleSignUpChange}
                className="p-3 rounded-xl bg-slate-700 text-white placeholder-slate-400"
              />

              <button
                type="button"
                onClick={handleSignUpSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all mt-2"
              >
                Sign Up
              </button>
            </form>
          </div>

          {/* SIGN IN FORM */}
          <div className="w-1/2 flex flex-col justify-center items-center p-10">
            <h2 className="text-3xl font-bold mb-6">Sign In</h2>

            <form className="flex flex-col w-80 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleSignInChange}
                className="p-3 rounded-xl bg-slate-700 text-white placeholder-slate-400"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleSignInChange}
                className="p-3 rounded-xl bg-slate-700 text-white placeholder-slate-400"
              />

              <button
                onClick={handleSignInSubmit}
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all mt-2"
              >
                Sign In
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthPage;
