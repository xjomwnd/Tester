const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Use the provided port or default to 3000
const app = require('../tests/supertest.js');

// Middleware to parse JSON bodies
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export the Express app instance