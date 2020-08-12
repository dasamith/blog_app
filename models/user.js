const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  // url string for thumbnail image
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
