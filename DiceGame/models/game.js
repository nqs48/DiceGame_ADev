/**
 * Imports functions from mongoose
 */
const {Schema, model} = require("mongoose");

/**
 * playerSchema, template for creates a player
 */
const playerSchema = new Schema({
  name: { type: String, trim: true, required: true },
  age: {
    type: Number,
    trim: true,
    required: true
  },
  score: { type: Number, trim: true, required: false },
});

/**
 * gameSchema, template for creates a game
 */
const gameSchema = new Schema(
  {
    gamers: [playerSchema],
    inProgress: {
      type: Boolean,
      required: false,
    },
    winner: {
      type: playerSchema,
      required: false,
    },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);


module.exports = model("Game", gameSchema, "Games");
