const {Schema, model} = require("mongoose");


const playerSchema = new Schema({
  name: { type: String, trim: true, required: true },
  age: {
    type: Number,
    trim: true,
    required: true
  },
  score: { type: Number, trim: true, required: false },
});

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
