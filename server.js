const express = require('express');
const app = express();
const port = 3000;

// Define API routes and handlers
app.get('/', (req, res) => {
  res.send('Hello, API!');
});

// Start the server
app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}`);
});
