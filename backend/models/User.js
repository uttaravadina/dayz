const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    nickname: String,
});

module.exports = mongoose.model('User', userSchema);
