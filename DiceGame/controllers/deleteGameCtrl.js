var mongoose = require("mongoose");
var Game = require("../models/game");



exports.deleteByIdGame= async function (req, res) {
  const id = req.params.id;
  try {
    const game = await Game.findByIdAndDelete(id);
    if (game) {
      res.json({ estado: true, mensaje: "Game deleted!!", game });
    } else {
      res.json({ estado: false, mensaje: "No deleted!!" });
    }
  } catch (error) {
    console.log(err);
  }
};
