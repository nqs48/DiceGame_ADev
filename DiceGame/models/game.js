const {Schema, model} = require("mongoose");
// var Player = require("./models/player");


var playerSchema = new Schema({
  name: { type: String, trim: true, required: true },
  age: {
    type: Number,
    trim: true,
    required: true,
    min: [8, "La edad minima es de 8 años"],
    max: [90, "La edad minima es de 8 años"],
  },
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

module.exports = model("Game", gameSchema, "Games");
