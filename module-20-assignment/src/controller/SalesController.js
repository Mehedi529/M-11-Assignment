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

// API Endpoint: GET /api/sales/quantity-by-product
app.get('/api/sales/quantity-by-product', async (req, res) => {
  try {
    const quantityByProduct = await Sales.aggregate([
      { $group: { _id: '$product', totalQuantity: { $sum: '$quantity' } } },
    ]);
    res.json(quantityByProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API Endpoint: GET /api/sales/top-products
app.get('/api/sales/top-products', async (req, res) => {
  try {
    const topProducts = await Sales.aggregate([
      {
        $group: {
          _id: '$product',
          totalRevenue: { $sum: { $multiply: ['$quantity', '$price'] } },
        },
      },
      { $sort: { totalRevenue: -1 } },
      { $limit: 5 },
    ]);
    res.json(topProducts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API Endpoint: GET /api/sales/average-price
app.get('/api/sales/average-price', async (req, res) => {
  try {
    const averagePrice = await Sales.aggregate([
      {
        $group: {
          _id: null,
          average: { $avg: '$price' },
        },
      },
    ]);
    res.json({ averagePrice: averagePrice[0].average });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API Endpoint: GET /api/sales/revenue-by-month
app.get('/api/sales/revenue-by-month', async (req, res) => {
  try {
    const revenueByMonth = await Sales.aggregate([
      {
        $group: {
          _id: {
            month: { $month: '$date' },
            year: { $year: '$date' },
          },
          totalRevenue: { $sum: { $multiply: ['$quantity', '$price'] } },
        },
      },
    ]);
    res.json(revenueByMonth);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API Endpoint: GET /api/sales/highest-quantity-sold
app.get('/api/sales/highest-quantity-sold', async (req, res) => {
  try {
    const highestQuantitySold = await Sales.findOne({}, {}, { sort: { quantity: -1 } });
    res.json(highestQuantitySold);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API Endpoint: GET /api/sales/department-salary-expense
app.get('/api/sales/department-salary-expense', async (req, res) => {
  // Assuming there is a 'department' field in the sales collection
  try {
    const departmentSalaryExpense = await Sales.aggregate([
      { $group: { _id: '$department', totalSalaryExpense: { $sum: '$salary' } } },
    ]);
    res.json(departmentSalaryExpense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
