var express = require("express");
var router = express.Router();
//var gameCtrl = require("../controllers/games");
var main = require("../public/javascripts/app");
var Game = require("../models/game");
var Player = require("../models/player");

// router.route("/").get(gameCtrl.getAddGame).post(gameCtrl.addGame);

router.get("/", (req, res) => {
  res.render("playGame", {
    content: "El juego ha sido iniciado /playGame y jugado",
  });
});

//Metodo para eliminar juegos
router.put("/:id", async function (req, res) {
  const id = req.params.id;
  var throwDice = randomNumbers();
  var min = Math.max.apply(null, throwDice);
  var winnerIndex= throwDice.indexOf(min);

  console.log(min);
  console.log(winnerIndex);

  const game = await Game.findById(id);

  for (let i = 0; i < game.gamers.length; i++) {
    game.gamers[i].score = throwDice[i];
  }
  var playerWinner=game.gamers[winnerIndex];
  // var player1 = game.gamers[0];
  // var player2 = game.gamers[1];
  // var player3 = game.gamers[2];

  // (player1.score = throwDice[0]),
  //   (player2.score = throwDice[1]),
  //   (player3.score = throwDice[2]);

  const body = {
    gamers: game.gamers,
    inProgress: false,
    winner: playerWinner
  };
  console.log("Consola de back: ", id);
  try {
    const game = await Game.findByIdAndUpdate(id, body, {
      useFindAndModify: false,
    });
    console.log(game);
    res.json({ estado: true, mensaje: "Game Finalizado!!" });
  } catch (err) {
    console.log(err);
    res.json({ estado: false, mensaje: "Fallamos!!" });
  }
});

function randomNumbers() {
  const numberMax = 6,
    numberMin = 1;

  let number1, number2, number3;

  do {
    number1 = Math.floor(Math.random() * (numberMax - numberMin) + numberMin);
    number2 = Math.floor(Math.random() * (numberMax - numberMin) + numberMin);
    number3 = Math.floor(Math.random() * (numberMax - numberMin) + numberMin);
  } while (number1 === number2 || number1 === number3 || number3 === number2);

  return [number1, number2, number3];
}

module.exports = router;
