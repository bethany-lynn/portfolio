const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static assets
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});