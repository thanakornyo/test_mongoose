const express = require('express')
const mongoose = require('mongoose')

const app = express()

const db = require('./config/keys').mongoURI
mongoose
    .connect(db, { useNewUrlParser: true }) // Let us remove that nasty deprecation warrning :)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const test = require('./routes/api/test')

app.use('/api/test', test)

const port = 3000

app.listen(port, () => console.log('Running on port ' + port))