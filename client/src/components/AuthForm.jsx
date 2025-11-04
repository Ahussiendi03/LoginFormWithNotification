import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/dashboard');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-5xl h-[550px] rounded-3xl bg-slate-800/70 border border-slate-700 backdrop-blur-3xl shadow-2xl overflow-hidden flex"
      >
        {/* SLIDING BLUE PANEL */}
        <motion.div
          animate={{
            x: isSignUp ? "100%" : "0%",
          }}
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
            className="px-6 py-2 bg-gradient-to-br from-slate-700 via-slate-950 to-slate-600 border border-white rounded-full font-semibold 
            hover:from-slate-800 hover:via-slate-700 hover:to-slate-700 transition-all"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </motion.div>

        <motion.div
          animate={{
            x: isSignUp ? "%" : "0%",
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex w-[200%] h-full"
        >
          {/* SIGN UP FORM */}
          <div className="w-1/2 flex flex-col justify-center items-center p-10">
            <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
            <form className="flex flex-col w-80 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 rounded-xl bg-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 rounded-xl bg-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded-xl bg-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-3 rounded-xl bg-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button
                type="button"
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
                placeholder="Email"
                className="p-3 rounded-xl bg-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-3 rounded-xl bg-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button
              onClick={handleSubmit}
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
