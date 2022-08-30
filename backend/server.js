const express = require('express');
//const bodyParser = require('body-parser');Is not needed anymore in the new version of express
const cors = require('cors');
//Add the mongoose library to the project
const mongoose = require('mongoose');



//dotenv
require('dotenv').config();


//Create the app, define port and uri:

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.DATABASE_URI;



//Middleware:
app.use(cors());


//Allow the server to parse json:
app.use(express.json())

//connect to the db using mongoose:
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const conn = mongoose.connection;
conn.once('open', () => {
    console.log("Database connection successfull!!!");
});



//Start the server:


app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})