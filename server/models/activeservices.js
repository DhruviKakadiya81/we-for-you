const mongoose = require('mongoose');

const Rating = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    spid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service_Provider'
    },
    rate: {
        type: Number,
    }
});



const ActiveService = mongoose.model('Rate', Rating);

module.exports = ActiveService;
