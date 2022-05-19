var express = require("express");
var router = express.Router();
var gameCtrl = require("../controllers/games");
var Game = require("../models/game");
var Player = require("../models/player");

// router.route("/").get(gameCtrl.getAddGame)
// router.route("/").post(gameCtrl.addGame);

//Get de vista con formulario para crear juego
router.get("/", async (req, res) => {
  res.render("createGame");
});

router.post("/", async (req, res) => {
  const body = req.body;
  try {
    var player1 = new Player({
      name: body.nameP1,
      age: body.ageP1,
      score: 0,
    });
    var player2 = new Player({
      name: body.nameP2,
      age: body.ageP2,
      score: 0,
    });
    var player3 = new Player({
      name: req.body.nameP3,
      age: req.body.ageP3,
      score: 0,
    });
    player1.save();
    player2.save();
    player3.save();

    var game = new Game({
      gamers: [player1, player2, player3],
      inProgress: true,
    });

    await game.save(function (err, game) {
      if (err) {
        return res.status(500).send(err.message);
      } else {
        res.render("detailsGame", {
          game,
          error: false,
        });
        // res.send(game);
        res.status(200);
        // console.log(game);
      }
    });
  } catch (error) {
    res.render("detailsGame", {
      game,
      error: true,
    });
    console.error("Error: " + error.message);
  }
});

module.exports = router;
