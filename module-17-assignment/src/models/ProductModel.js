const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0 
  },
  stock: {
    type: Number,
    required: true,
    min: 0 
  },
  category: {
    type: String,
    required: true
  },
  imageURL: {
    type: String
  }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
