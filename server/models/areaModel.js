const mongoose = require('mongoose');

const areaSchema = new mongoose.Schema({
  areaname: {
    type: String,
    required: true
  },
  cityid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
    required: true
  }
});

const Area = mongoose.model('Area', areaSchema);

module.exports = Area;
