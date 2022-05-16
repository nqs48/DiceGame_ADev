var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var playerSchema = new Schema({
  name: { type: String },
  age: { type: Array },
});

module.exports = mongoose.model("Game", playerSchema, "Games");
