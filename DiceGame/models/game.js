var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var playerSchema = new Schema({
  name: { type: String, trim: true, required: true },
  age: { type: Number, trim: true, required: true },
  score: { type: Number, trim: true, required: false },
});

var gameSchema = new Schema(
  {
    gamers: [playerSchema],
    inProgress: {
      type: Boolean,
      required: false,
    },
    winner: {
      type: String,
      required: false,
    },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Game", gameSchema, "Games");
