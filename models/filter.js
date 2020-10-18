const mongoose = require('mongoose');

const filterSchema = new mongoose.Schema({
    key: {
        type: String
    },
    value: {
        type: String
    }
},{
        timestamps: true

});

module.exports = mongoose.model('Filter',filterSchema);
