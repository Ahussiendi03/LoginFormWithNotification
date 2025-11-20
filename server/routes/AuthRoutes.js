const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");

// USER SIGN UP
router.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // 1. Check all fields
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2. Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    // 3. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Create user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      status: "pending", // default
    });

    await newUser.save();

    // 5. Return result
    res.status(201).json({
      message: "Registration successful, waiting for admin approval.",
      userId: newUser._id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. TRY ADMIN LOGIN FIRST
    const admin = await Admin.findOne({ email });
    if (admin) {
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) return res.status(401).json({ message: "Invalid password" });

      return res.status(200).json({
        message: "Admin login successful",
        role: "admin",
        admin: {
          id: admin._id,
          email: admin.email
        }
      });
    }

    // 2. TRY USER LOGIN
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Account not found" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // 3. CHECK USER STATUS
    if (user.status === "pending") {
      return res.status(403).json({ message: "Your account is still pending approval." });
    }

    if (user.status === "rejected") {
      return res.status(403).json({ message: "Your registration was rejected." });
    }

    // 4. USER LOGIN SUCCESS
    res.status(200).json({
      message: "User login successful",
      role: "user",
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        status: user.status
      }
    });

  } catch (err) {
    console.error("SIGN IN ERROR:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
