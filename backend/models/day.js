const mongoose = require('mongoose')

const daySchema = new mongoose.Schema({
    day: {
        type: Date,
        required: true
    },
    mood: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Day', daySchema)
