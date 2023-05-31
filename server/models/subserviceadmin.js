const mongoose = require('mongoose');

const subServiceAdSchema = new mongoose.Schema({
    subname: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    serviceid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true
    }
});

const SubService = mongoose.model('SubServiceAdmin', subServiceAdSchema);

module.exports = SubService;
