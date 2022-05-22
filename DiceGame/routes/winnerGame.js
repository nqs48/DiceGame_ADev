var express = require("express");
var router = express.Router();
var gameCtrl = require("../controllers/games");
var Game = require("../models/game");
var Player = require("../models/player");


router.get("/:id", async function (req, res) {
  const id = req.params.id;
  try {
    const game = await Game.findById(id);
    res.render("winnerGame", { game, error: false });
  } catch (error) {
    console.error("Error: " + error.message);
    res.render("winnerGame", {
      error: true,
      mensaje: "No se encuentra el ID seleccionado",
    });
  }
});



module.exports = router;
