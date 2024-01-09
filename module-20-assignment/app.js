// server.js
const express = require('express');
const mongoose = require('mongoose');
const Sales = require('./app');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API Endpoint: GET /api/sales/total-revenue
app.get('/api/sales/total-revenue', async (req, res) => {
  try {
    const totalRevenue = await Sales.aggregate([
      { $group: { _id: null, total: { $sum: { $multiply: ['$quantity', '$price'] } } } },
    ]);
    res.json({ totalRevenue: totalRevenue[0].total });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Implement other API endpoints as described in the requirements

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
