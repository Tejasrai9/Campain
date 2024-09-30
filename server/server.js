const express = require('express');
const formRoutes = require('./routes/formroute'); // Correct path to formRoutes
const connectDB = require('../config/db'); // Import the MongoDB connection
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Mount the form routes at /api
app.use('/api', formRoutes);

// Serve static files
app.use(express.static('public'));

// Serve index.html on root
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
