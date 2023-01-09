const mongoose = require("mongoose");

const alumins = mongoose.Schema({
  name: String,
  image: String
});

module.exports = mongoose.model("alumni1", alumins);