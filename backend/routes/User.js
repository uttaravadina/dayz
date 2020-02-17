const express = require('express');
const router = express.Router();
const User = require('../models/User');

// get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    } 
});

// create a new user
router.post('/', async (req, res) => {
    const { username, nickname } = req.body;
    let usernameTaken = await User.exists({ username });

    if (!usernameTaken) {
        const user = new User({
            username,
            nickname,
        });
        await user.save();
        res.status(200).end();
    }
    else {
        res.status(400).json({ message: "Username taken" });
    }
});

// sign in
router.post('/signin', async (req, res) => {
    const { username } = req.body;
    let inSystem = await User.exists({ username });

    if (inSystem) {
        res.status(200).cookie('username', username, { sameSite: 'None' }).end();
    }
    else {
        res.status(400).json({ message: "Invalid username" });
    }
});

module.exports = router;