var express = require("express");
var router = express.Router();
//var gameCtrl = require("../controllers/games");
var main = require("../public/javascripts/app");
var Game = require("../models/game");
var Player = require("../models/player");


// router.route("/").get(gameCtrl.getAddGame).post(gameCtrl.addGame);


router.get("/", (req, res) => {
  res.send("Estamos en la ruta /playGame");
});


//Metodo para eliminar juegos
router.get("/:id", async function (req, res) {
  const id = req.params.id;
  console.log("Consola de back: ", id);
  try {
    const game = await Game.findByIdAndDelete(id);
    if (game) {
      res.json({ estado: true, mensaje: "Game deleted!!" });
    } else {
      res.json({ estado: false, mensaje: "No deleted!!" });
    }
  } catch (err) {
    console.log(err);
  }
});


function playGame(idGame) {
  var throwDice = main.randomNumbers();
  router.put(gameCtrl.updateGame);
}

module.exports = router;













