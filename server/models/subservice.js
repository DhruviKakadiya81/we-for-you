const mongoose = require('mongoose');

const subServiceSchema = new mongoose.Schema({
  subname: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  },
  prize: {
    type: Number,
    required: true
  },
  discription: {
    type: String,
    require: true
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
