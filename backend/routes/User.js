const express = require('express');
const router = express.Router();
const User = require('../models/User');

// get nickname given username
router.get('/', async (req, res) => {
    const { username } = req.query;
    let data;
    try {
        data = await User.find({ username }, { nickname: 1, _id: 0 })
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    };
});

module.exports = router;