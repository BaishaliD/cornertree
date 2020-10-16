// const express = require('express');
// const app = express();
// const port = 8000;
// // const db = require('./config/mongoose');
// //const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// //Middlewares
// app.use(bodyParser.json());

// //Route middleware
// // app.use('/cornertree/api',require('./route'));

// //database

// //const mongoose = require('mongoose');

// // Create a database variable outside of the database connection callback to reuse the connection pool in your app.
// var db;

// // Connect to the database before starting the application server.
// mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", function (err, client) {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }

//   // Save database object from the callback for reuse.
//   db = client.db();
//   console.log("Database connection ready");

//   // Initialize the app.
//   var server = app.listen(process.env.PORT || 8080, function () {
//     var port = server.address().port;
//     console.log("App now running on port", port);
//   });
// });


// //api routes

// app.post("/api/signup", function(req, res) {

//     var req_body = req.body;

//     console.log("request body from server.js", req_body);
//     res.send({
//         status: 200,
//         data: req_body
//     })
// });



var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var CONTACTS_COLLECTION = "contacts";

var app = express();
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
// mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", function (err, client) {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }

//   // Save database object from the callback for reuse.
//   db = client.db();
//   console.log("Database connection ready");

//   // Initialize the app.
//   var server = app.listen(process.env.PORT || 8080, function () {
//     var port = server.address().port;
//     console.log("App now running on port", port);
//   });
// });

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });








// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
  }
  
  /*  "/api/contacts"
   *    GET: finds all contacts
   *    POST: creates a new contact
   */

   app.post("api/signup",function(req,res){
       console.log("request body",req.body);

       var r = req.body;
       res.send({
           status: 200,
           data: r
       })
   })
  
//   app.get("/api/contacts", function(req, res) {
//     db.collection(CONTACTS_COLLECTION).find({}).toArray(function(err, docs) {
//       if (err) {
//         handleError(res, err.message, "Failed to get contacts.");
//       } else {
//         res.status(200).json(docs);
//       }
//     });
//   });
  
//   app.post("/api/contacts", function(req, res) {
//     var newContact = req.body;
//     newContact.createDate = new Date();
  
//     if (!req.body.name) {
//       handleError(res, "Invalid user input", "Must provide a name.", 400);
//     } else {
//       db.collection(CONTACTS_COLLECTION).insertOne(newContact, function(err, doc) {
//         if (err) {
//           handleError(res, err.message, "Failed to create new contact.");
//         } else {
//           res.status(201).json(doc.ops[0]);
//         }
//       });
//     }
//   });