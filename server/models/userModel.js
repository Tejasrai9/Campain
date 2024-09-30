const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true }
});

// Export the model
const User = mongoose.model('User', userSchema, 'users'); // 'users' is the collection name

module.exports = User;
