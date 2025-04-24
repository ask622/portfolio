const mongoose = require('mongoose');

// Define a schema for contact form data
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    subject: String,
    message: String
});

// Export the model
module.exports = mongoose.model('User', userSchema);
