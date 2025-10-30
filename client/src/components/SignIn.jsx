import React, { useState } from "react";
import AuthForm from "./AuthForm";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <AuthForm title="Sign In">
      <form onSubmit={handleSubmit} className="space-y-5">
        <motion.div whileFocus={{ scale: 1.03 }}>
          <label className="block text-slate-300 mb-1">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
            required
          />
        </motion.div>

        <motion.div whileFocus={{ scale: 1.03 }}>
          <label className="block text-slate-300 mb-1">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
            required
          />
        </motion.div>

        <button
          type="submit"
          className="w-full py-3 mt-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 transition-all font-semibold text-white shadow-lg"
        >
          Sign In
        </button>
      </form>

      <p className="text-slate-400 text-center mt-6">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-blue-400 hover:underline">
          Sign Up
        </Link>
      </p>
    </AuthForm>
  );
};

export default SignIn;
