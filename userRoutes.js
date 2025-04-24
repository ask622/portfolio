const express = require('express');
const router = express.Router();
const User = require('../models/user');

// POST request to save user data
router.post('/', async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    const newUser = new User({ name, email, phone, subject, message });

    try {
        await newUser.save();
        res.status(201).json({ success: true, message: 'Message saved successfully!' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error saving message' });
    }
});

module.exports = router;
