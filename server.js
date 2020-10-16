const express = require('express');
const app = express();
const port = 8080;
// const db = require('./config/mongoose');
//const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Middlewares
// app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
// app.use(cors());


var distDir = __dirname + "/dist/";
 app.use(express.static(distDir));
//Route middleware
// app.use('/cornertree/api',require('./route'));

//database

//const mongoose = require('mongoose');

// const mongoose = require('mongoose');
// const connection = "mongodb+srv://baishali:<Baishali123!>@<cornertree>/<baishali>?retryWrites=true&w=majority";
// mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
//     .then(() => {
//         console.log("Database Connected Successfully");

//         var server = app.listen(process.env.PORT || 8080, function () {
//             var port = server.address().port;
//             console.log("App now running on port", port);
//           });


//     })
//     .catch(err => console.log(err));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

//process.env.MONGODB_URI

const connection =
    "mongodb+srv://baishali:baishalidatta@cornertree.ung95.mongodb.net/cornertree?retryWrites=true&w=majority";

//Connect to the database before starting the application server.
mongodb.MongoClient.connect( connection || "mongodb://localhost:27017/test", function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

//Route middleware
app.use("/cornertree/api", require("./router"));

// Initialize the app.
// var server = app.listen(process.env.PORT || 8080, function () {
//     var port = server.address().port;
//     console.log("App now running on port", port);
//   });


//api routes

app.post("/api/signup", function(req, res) {

    var req_body = req.body;

    console.log("request body from server.js", req_body);
    res.send({
        status: 200,
        data: req_body
    })
});


