const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(cors());
app.use(express.json());
// app.use(express.static('client/build'));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const attractionsRouter = require('./routes/attractions');
const contactRouter = require('./routes/contact');


app.use('/viewattractions', attractionsRouter);
app.use('/contact', contactRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});