var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var playerSchema = new Schema({
  name: { type: String, trim: true, required: true },
  age: { type: String, trim: true, required: false },
  score: { type: Number, trim: true, required: false },
});

module.exports = mongoose.model("Player", playerSchema);
