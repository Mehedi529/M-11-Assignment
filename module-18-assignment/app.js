// Import necessary libraries and modules
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Create an Express application
const app = express();

// Use helmet for various security headers
app.use(helmet());

// Enable CORS for all routes
app.use(cors());

// Custom middleware for additional security measures if needed

module.exports = app;
