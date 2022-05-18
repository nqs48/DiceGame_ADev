const {Schema, model}= require("mongoose");

playerSchema = new Schema({
  name: { type: String, trim: true, required: [true, "El valor es requerido"] },
  age: { type: Number, trim: true, required: [true, "El valor es requerido"] },
  score: { type: Number, trim: true, required: false },
});


const Player = model("Player", playerSchema, "Players");

module.exports = Player;
