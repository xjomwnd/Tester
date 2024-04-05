// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  // Handle form submission here
  const { testName, testScore } = req.body;
  
  // Example: Save to database
  // Your database logic here
  
  res.status(200).json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
