const mongoose = require('mongoose');

const BookServiceShema = new mongoose.Schema({
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

    }
});



const BookService = mongoose.model('BookService', BookServiceShema);

module.exports = BookService;
