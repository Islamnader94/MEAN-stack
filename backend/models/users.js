const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  full_name: {
    type: String
  },
  phone_number: {
    type: String
  },
  email: {
    type: String
  },
  lacation: {
    type: Number
  }
}, {
    collection: 'users'
  })

module.exports = mongoose.model('User', userSchema)