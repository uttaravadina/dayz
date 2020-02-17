const express = require('express');
const router = express.Router();
const Day = require('../models/Day');

// get data given username
router.get('/', async (req, res) => {
    const { start, end } = req.query;
    const username = req.cookies.username;
    let data;
    try {
        // only looking for one date
        if (username && start && !end) {
            data = await Day.find({ username, day: new Date(start) }, { mood: 1, good: 1, bad: 1, day: 1, _id: 0 });
        }
        else {
            data = await Day.find(
                {
                    username,
                    day: {
                        $gte: new Date(start),
                        $lte: new Date(end),
                    }
                },
                { mood: 1, good: 1, bad: 1, day: 1, _id: 0 }
            );
        }
        res.json(data);

    } catch (err) {
        res.status(500).json({ message: err.message });
    };
});

// creating one day
router.post('/', async (req, res) => {
    const day = new Day({
        day: new Date(req.body.day),
        mood: req.body.mood,
        username: req.cookies.username,
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

// edit day 
router.put('/', async (req, res) => {
    const { date, newMood } = req.query;
    const username = req.cookies.username;
    
    try {
        await Day.update(
            {
                username,
                day: new Date(date)
            },
            {
                $set: {
                    mood: newMood
                }
            }
        );
        res.status(200).end();
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});


// delete document given username and date, does not just delete rating
router.delete('/', async (req, res) => {
    const { username, date } = req.query;
    try {
        await Day.deleteOne(
            {
                username,
                day: new Date(date)
            }
        );
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

module.exports = router;