// backend/app.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Contact = require('./models/Contact'); // Ensure this model file exists

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection (cleaned up)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Contact form route
app.post('/contact', async (req, res) => {
  try {
    const { fullName, email, mobile, subject, message } = req.body;
    const newContact = new Contact({ fullName, email, mobile, subject, message });
    await newContact.save();
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving contact', error });
  }
});

module.exports = app;
