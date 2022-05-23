/**
 * Imports functions from mongoose
 */
const { Schema, model } = require("mongoose");

/**
 * playerSchema, template for creates a player
 */
playerSchema = new Schema({
  name: { type: String, trim: true, required: [true, "El valor es requerido"] },
  age: { type: Number, trim: true, required: [true, "El valor es requerido"] },
  score: { type: Number, trim: true, required: false },
});

/**
 * Model of Player
 */
const Player = model("Player", playerSchema);

module.exports = Player;
