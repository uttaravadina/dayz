require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(
    `mongodb+srv://admin:${process.env.DAYZ_DB_PASSWORD}@dev-5wcoz.mongodb.net/test?retryWrites=true&w=majority`,
);
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

const userRoute = require('./routes/User')
app.use('/user', userRoute)

app.listen(4000, () => console.log('server started'))