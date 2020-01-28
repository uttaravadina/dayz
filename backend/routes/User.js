const express = require('express')
const router = express.Router()
const User = require('../models/User')

// get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    } 
})

// create a new user
router.post('/', async (req, res) => {
    const user = new User({
        username: req.body.username,
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

module.exports = router