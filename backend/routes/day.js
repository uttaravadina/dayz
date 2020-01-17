const express = require('express')
const router = express.Router()
const Day = require('../models/Day')

router.get('/', async (req, res) => {
    try {
        const days = await Day.find()
        res.json(days)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.post('/', async (req, res) => {
    const day = new Day({
        day: req.body.day,
        mood: req.body.mood
    })

    try {
        const newDay = await day.save()
        res.status(201).json(newDay)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.get('/:day', getDay, (req, res) => {
    res.json(res.day)
})

router.delete('/:day', getDay, async (req, res) => {
    try {
        await res.day.remove()
        res.json({ message: 'Deleted This Day' })
      } catch(err) {
        res.status(500).json({ message: err.message })
      }
})

async function getDay(req, res, next) {
    try {
        day = await Day.find( { "day": { $eq: req.params.day } })
        if (day == null) {
            return res.status(404).json({ message: 'Date has not been rated' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.day = day
    next()
}



module.exports = router