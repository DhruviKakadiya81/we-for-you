const mongoose = require('mongoose');

const BookServiceShema = new mongoose.Schema({
    spid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SPModel',
        required: true
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile',
        required: true,
    },
    serviceid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubService',
        required: true,
    }
});


BookServiceShema.index({ userid: 1, serviceid: 1 }, { unique: true });
const BookService = mongoose.model('BookService', BookServiceShema);

module.exports = BookService;
