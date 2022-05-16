var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var gameSchema = new Schema(
  {
    // gamers: {
    //   type: [
    //     {
    //       player1: {
    //         name1: { type: String, required: true },
    //         age1: { type: Number, required: false },
    //         number1: { type: Number, required: false },
    //       },
    //       player2: {
    //         name2: { type: String, required: true },
    //         age2: { type: Number, required: false },
    //         number2: { type: Number, required: false },
    //       },
    //       player3: {
    //         name3: { type: String, required: true },
    //         age3: { type: Number, required: false },
    //         number3: { type: Number, required: false },
    //       },
    //     },
    //   ],
    //   required: true,
    // },
    player1: {
      type: String,
      trim: true,
      required: true,
    },
    player2: {
      type: String,
      trim: true,
      required: true,
    },
    player3: {
      type: String,
      trim: true,
      required: true,
    },
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
