const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female', 'nonbinary']
  },
  birthdate: {
    type: Date,
    required: true
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  profile_image: {
    type: String,
    required: true
  }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
