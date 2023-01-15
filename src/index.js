const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
const { PORT, mongoDB_string } = process.env;

const route = require('./route/route');

const app = express();

app.use(express.json());
app.use('/', route);
mongoose.connect(mongoDB_string)
    .then(() => console.log("mongoDB is connected"))
    .catch((error) => console.log(error));

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})