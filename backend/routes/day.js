const express = require('express')
const router = express.Router()
const Day = require('../models/Day')

// get all days
router.get('/', async (req, res) => {
    try {
        const days = await Day.find()
        res.json(days)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// creating one day
router.post('/', async (req, res) => {
    const day = new Day({
        day: new Date(req.body.day),
        mood: req.body.mood,
        username: req.body.username,
        good: req.body.good,
        bad: req.body.bad
    })

    try {
        const newDay = await day.save()
        res.status(201).json(newDay)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})


router.get('/:user/:day', getDay, (req, res) => {
    res.json(res.day)
})

async function getDay(req, res, next) {
    try {
        day = await Day.find( { username: { $eq: req.params.day }, day: { $eq: req.params.day } })
        if (username == null) {
            return res.status(404).json({ message: 'Username does not exist' })
        }
        if (day == null) {
            return res.status(404).json({ message: 'Date has not been rated' })
        }
        
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.day = day
    next()
}

// get day between A and B

// add day

// edit day



module.exports = router