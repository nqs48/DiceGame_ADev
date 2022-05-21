var express = require("express");
var router = express.Router();
// var gameCtrl = require("../controllers/games");
var Game = require("../models/game");
// var Player = require("../models/player");


router.get("/", async (req, res)=>{
  res.render("findGame")
})



router.get("/:id", async function (req, res) {
  const id = req.body.id;
  try {
    const game = await Game.findById(id);
    res.render("detailsGame", { game, error: false });
    // res.send(game)
  } catch (error) {
    console.error("Error: " + error.message);
    res.render("detailsGame", {
      error: true,
      mensaje: "No se encuentra el ID seleccionado",
    });
  }
});

module.exports = router;