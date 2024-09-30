// Import Mongoose
const mongoose = require('mongoose');

// MongoDB connection URI without database name (we will use the database dynamically)
const mongoURI = 'mongodb+srv://Tejas:1234@cluster0.xv43k.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 50000 // Increase timeout to handle delays
})
  .then(() => {
    console.log('MongoDB connected');

    // Define a simple schema and model
    const userSchema = new mongoose.Schema({
      name: String,
      email: String,
      phone: String
    });

    const User = mongoose.model('User', userSchema); // This will use the 'users' collection

    // Insert a sample user into the database
    const sampleUser = new User({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890'
    });

    // Save the user to the database
    sampleUser.save()
      .then(doc => {
        console.log('User saved successfully:', doc);
        mongoose.connection.close(); // Close the connection after the operation
      })
      .catch(err => {
        console.error('Error saving user:', err);
      });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
