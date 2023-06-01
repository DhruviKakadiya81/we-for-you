const mongoose = require('mongoose');

const subServiceSchema = new mongoose.Schema({
  subname: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubServiceAdmin',
    require: true
  },
  prize: {
    type: Number,
    required: true
  },
  discription: {
    type: String,
  },
  serviceid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true
  },
  spid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service_Provider',
    required: true
  }
});

const SubService = mongoose.model('SubService', subServiceSchema);

module.exports = SubService;
