const mongoose = require('mongoose');

const spdetailSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubService',
    required: true
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
    required: true
  },
  area: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Area',
    required: true
  },
  profile_image: {
    type: String,
    required: true
  },
  spid:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service_Provider',
    required: true
  }
});

const spdetail = mongoose.model('Spdetail', spdetailSchema);

module.exports = spdetail;
