const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// Route to check if user exists
router.post('/checkUser', async (req, res) => {
  try {
    const { email, phone } = req.body;

    // Check if email or phone exists
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });

    if (existingUser) {
      return res.status(200).json({ exists: true });
    } else {
      return res.status(200).json({ exists: false });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
});

// Route to save new user
router.post('/saveUser', async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // Check if email or phone already exists
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Save new user
    const newUser = new User({ name, email, phone });
    await newUser.save();

    return res.status(201).json({ success: true });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
