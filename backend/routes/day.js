const express = require('express');
const router = express.Router();
const Day = require('../models/Day');

// get data given username
router.get('/', async (req, res) => {
    const { username } = req.query;
    try {
        const days = await Day.find({ username });
        res.json(days);
    } catch (err) {
        res.status(500).json({ message: err.message });
    };
});

// creating one day
router.post('/', async (req, res) => {
    const day = new Day({
        day: new Date(req.body.day),
        mood: req.body.mood,
        username: req.body.username,
        good: req.body.good,
        bad: req.body.bad
    });

    try {
        const newDay = await day.save();
        res.status(201).json(newDay);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

/* get day data between date A and B
return it as array
number of elements in array correspond to number of dates between
A and B inclusive unless A equals B
if date doesn't have data, leave it null in the array
*/

// edit day 

module.exports = router;