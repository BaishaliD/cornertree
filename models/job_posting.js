const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    jobRole:{
        type: String,
        // required: true
    },
    function: {
        type: String,
        // required: true
    },
    subFunction: {
        type: String,
        // required: true
    },
    company: {
        type: String,
        // required: true
    },
    coreSkils: {
        type: [String],
        // required: true
    },
    softSkils: {
        type: [String],
        // required: true
    },
    location: {
        type: String,
        // required: true
    },
    pin: {
        type: Number,
        // required: true
    },
    compensation: {
        type: Number,
        // required: true
    },
    jd: {
        type: String,
        // required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Job',jobSchema);

