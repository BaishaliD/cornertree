const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
const mongoose = require("mongoose");

//Middlewares
// app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
// app.use(cors());


var distDir = __dirname + "/dist/";
 app.use(express.static(distDir));


//database

const connection =
    "mongodb+srv://baishali:baishalidatta@cornertree.ung95.mongodb.net/cornertree?retryWrites=true&w=majority";


//Route middleware
app.use("/cornertree/api", require("./router"));


var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

module.exports = server;

//api routes

app.post("/api/signup", function(req, res) {

    var req_body = req.body;

    console.log("request body from server.js", req_body);
    res.send({
        status: 200,
        data: req_body
    })
});


