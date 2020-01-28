const mongoose = require('mongoose')

const daySchema = new mongoose.Schema({
    day: Date,
    mood: Number,
    username: String,
    good: [String],
    bad: [String],    
})

module.exports = mongoose.model('Day', daySchema)
