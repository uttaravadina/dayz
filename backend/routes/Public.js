const express = require('express');
const router = express.Router();
const User = require('../models/User');

// create a new user
router.post('/signup', async (req, res) => {
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