const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  cus_add: { type: String, required: true },
  cus_city: { type: String, required: true },
  cus_country: { type: String, required: true },
  cus_fax: { type: String, required: true },
  cus_name: { type: String, required: true },
  cus_phone: { type: String, required: true },
  cus_postcode: { type: String, required: true },
  cus_state: { type: String, required: true },
  ship_add: { type: String, required: true },
  ship_city: { type: String, required:true},
)};

