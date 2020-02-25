const express = require('express');
const router = express.Router();
const User = require('../models/User');

// get nickname given username
router.get('/nickname', async (req, res) => {
    const username = req.cookies.username;
    let data;
    try {
        data = await User.find({ username }, { nickname: 1, _id: 0 })
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    };
});

// logout
router.post('/signout', async (req, res) => {
    res.clearCookie('username');
    res.status(200).end();
});

module.exports = router;