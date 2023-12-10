const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1 
  }
});
const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [{
    type: orderItemSchema,
    required: true
  }],
  totalAmount: {
    type: Number,
    required: true,
    min: 0 
  },
  shippingAddress: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: 'Pending'
  }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
