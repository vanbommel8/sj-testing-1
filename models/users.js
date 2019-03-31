const mongoose = require('mongoose');

// eslint-disable-next-line new-cap
const userSchema = mongoose.Schema({
  name: String,
  surname: String,
  age: Number,
  email: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
