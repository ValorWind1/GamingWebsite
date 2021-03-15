const express = require('express');

const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config')

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes 
const gameRouter = require('./routers/games')
app.use('/home', gameRouter)


//Connect to Db
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true}, () => {
    console.log("Successfully connected to DB")
})

app.listen(8080);