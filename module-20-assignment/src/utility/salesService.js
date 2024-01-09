// server.js
const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./api');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Use the API routes
app.use('/api/sales', apiRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
