const mongoose = require('mongoose')

const moodSchema = new mongoose.Schema({
    mood: {
        type: String,
        required: true
    },
    hex: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Mood', moodSchema)
