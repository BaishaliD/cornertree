const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    jobRole:{
        type: String,
        // required: true
    },
    jobRole_l:{
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
    coreSkills: {
        type: [String],
        // required: true
    },
    coreSkills_l: {
        type: [String],
        // required: true
    },
    softSkills: {
        type: [String],
        // required: true
    },
    location: {
        type: String,
        // required: true
    },
    location_l: {
        type: String,
        // required: true
    },
    pin: {
        type: String,
        // required: true
    },
    compensation: {
        type: String,
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

