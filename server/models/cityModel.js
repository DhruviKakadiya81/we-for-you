const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  cityname: {
    type: String,
    required: true,
    unique:true
  }
 
});

const City = mongoose.model('City', citySchema);

module.exports = City;
