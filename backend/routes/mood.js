const express = require('express')
const router = express.Router()
const Mood = require('../models/mood')

router.get('/', async (req, res) => {
   
    try {
        const mood = await Mood.find()
        res.json(mood)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


router.post('/', async (req, res) => {
    const mood = new Mood({
        mood: req.body.mood,
        hex: req.body.hex
    })

    try {
        const newMood = await mood.save()
        res.status(201).json(newMood)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = router