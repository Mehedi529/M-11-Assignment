// app.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/salesdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const salesSchema = new mongoose.Schema({
  product: String,
  quantity: Number,
  price: Number,
  date: Date,
});

const Sales = mongoose.model('Sales', salesSchema);

module.exports = Sales;
