const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and urlencoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route for serving the HTML form
app.get('/', (req, res) => {
  res.send(`
    <form action="/submit" method="post">
      <label for="data">Enter Data:</label><br>
      <input type="text" id="data" name="data"><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

// Route for handling form submission
app.post('/submit', (req, res) => {
  const { data } = req.body;
  // Here you can process the submitted data, e.g., save it to a database
  res.send(`Data received: ${data}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
