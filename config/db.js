

const mongoose = require('mongoose');

// MongoDB connection URI (use environment variables for production)
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://Tejas:1234@cluster0.xv43k.mongodb.net/?retryWrites=true&w=majority';

// Asynchronously connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 50000
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit on failure
  }
};

module.exports = connectDB;
