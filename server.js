const express = require('express');
const app = express();
const port = 8000;
// const db = require('./config/mongoose');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Middlewares
app.use(bodyParser.json());

//Route middleware
// app.use('/cornertree/api',require('./route'));

//database

//const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test");

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to Mongodb"));

db.once('open',function(){
    console.log('Connected to database :: MongoDB');
});

//module.exports = db;


  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });


//module.exports = server;


//api routes

app.post("/api/signup", function(req, res) {

    var req_body = req.body;

    console.log("request body from server.js", req_body);
    res.send({
        status: 200,
        data: req_body
    })
});