const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const Contact = require('./models/user'); // User model for form data

dotenv.config(); // Load .env variables

const app = express();
const PORT = 5000;

app.use(cors()); // Enable CORS to allow frontend to make requests
app.use(express.json()); // Parse JSON requests

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Connected to MongoDB Atlas"))
    .catch((error) => console.error("❌ MongoDB connection error:", error));

// Handle form submission and save data to MongoDB
app.post('/api/contact', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json({ message: "Form submitted successfully!" });
    } catch (error) {
        console.error("Form submission error:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

// Server listening on port 5000
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
