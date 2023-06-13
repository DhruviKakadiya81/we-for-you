const mongoose = require('mongoose');

const FinalBookingSchema = new mongoose.Schema({
    spid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SPModel',

    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile',

    },
    serviceid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubService',

    },
    mobileno: {
        type: String
    },
    date: {
        type: Date
    },
    hour: {
        type: Number,
        max: 22,
        min: 8,
    },
    minutes: {
        type: Number
    },
    address: {
        type: String

    },
    status: {
        type: String,
        default: "Schedule"
    }


});



const FinalBooking = mongoose.model('FinalBooking', FinalBookingSchema);

module.exports = FinalBooking;
