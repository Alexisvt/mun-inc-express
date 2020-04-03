const mongoose = require('mongoose');
const { Schema } = mongoose;

const CustomerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  dateOfBirth: { type: Date, default: Date.now },
  lastName: String,
  email: String,
  phoneNumber: String,
});

module.exports = mongoose.model('customer', CustomerSchema);
