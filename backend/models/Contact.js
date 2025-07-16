// backend/models/Contact.js

const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  mobile: String,
  subject: String,
  message: String
});

module.exports = mongoose.model('Contact', contactSchema);
