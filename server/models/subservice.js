const mongoose = require('mongoose');

const subServiceSchema = new mongoose.Schema({
  subservicename: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  videos: {
    type: [String],
    required: false
  },
  serviceid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true
  }
});

const SubService = mongoose.model('SubService', subServiceSchema);

module.exports = SubService;
