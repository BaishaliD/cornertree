const mongoose = require('mongoose');
const uri =
    "mongodb+srv://baishali:baishalidatta@cornertree.ung95.mongodb.net/cornertree?retryWrites=true&w=majority";
mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to Mongodb"));

db.once('open',function(){
    console.log('Connected to database :: MongoDB');
});

module.exports = db;