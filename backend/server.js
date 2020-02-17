const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const User = require('./models/User');

mongoose.connect(
    `mongodb+srv://admin:${process.env.DAYZ_DB_PASSWORD}@dev-5wcoz.mongodb.net/test?retryWrites=true&w=majority`,
);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));

app.use(express.json());
app.use(cors({ origin: process.env.NODE_ENV === 'production' ? 'http://dayz-app.herokuapp.com' : 'http://localhost:3000', credentials: true }));
app.use(cookieParser());

const publicRoute = require('./routes/Public')
app.use('/', publicRoute);

const authenticate = async function(req) {
    if (req.cookies != null) {
        let username = req.cookies.username;
        if (username != null) {
            let inSystem = await User.exists({ username });
            if (inSystem) {
                return true;
            }
        } 
    } 
    return false;
}

app.get('/isAuthenticated', async (req, res) => {
    const isAuthenticated = await authenticate(req);
    res.status(200).send(isAuthenticated);
})

app.use(async function (req, res, next) {
    const isAuthenticated = await authenticate(req);
    if (isAuthenticated) {
        return next();
    }
    res.status(401).end();
});

const userRoute = require('./routes/User');
app.use('/user', userRoute);

const dayRoute = require('./routes/Day');
app.use('/day', dayRoute);

app.listen(process.env.PORT || 4000, () => console.log('server started'));
