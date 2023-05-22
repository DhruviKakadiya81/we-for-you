const mongoose = require('mongoose');

const SPModelSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  mobileno: {
    type: String,
    unique:true,
  },
  gender: {
    type: String,
  },
  shopname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  pemail: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
  },
  cityid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
    required: true
  },
  areaid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Area',
    required: true
  },
  spid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service_Provider',
    required: true, 
    unique: true

  }
});

const SPModel = mongoose.model('SPModel', SPModelSchema);

module.exports = SPModel;
