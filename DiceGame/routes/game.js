var express = require("express");
var router = express.Router();
var gameCtrl = require("../controllers/games");
var Game = require("../models/game");
var Player = require("../models/player");


//Metodo Get para buscar juegos
router.get("/:id", async function (req, res) {
  // res.render("findGame");
  const id = req.params.id;
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

// router.get("/:id/winner", async function (req, res) {
//   const id = req.params.id;
//   try {
//     const game = await Game.findById(id);
//     res.render("winnerGame", { game, error: false });
//   } catch (error) {
//     console.error("Error: " + error.message);
//     res.render("winnerGame", {
//       error: true,
//       mensaje: "No se encuentra el ID seleccionado",
//     });
//   }
// });

//Métodos REST optimizados

// router.route("/").get(gameCtrl.findAllGames)
// router.route("/findGame").get(gameCtrl.findById);
// router.route("/findGame/:id").put(gameCtrl.updateGame);
// router.route("/findGame/:id").delete(gameCtrl.deleteGame);

module.exports = router;
