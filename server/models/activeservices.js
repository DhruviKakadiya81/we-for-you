const mongoose = require('mongoose');

const ActiveSer = new mongoose.Schema({
    activeser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FinalBooking',
        required: true
    }
});



const ActiveService = mongoose.model('ActiveService', ActiveSer);

module.exports = ActiveService;
