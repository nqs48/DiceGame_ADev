var express = require("express");
var router = express.Router();
var gameCtrl = require("../controllers/games");
var Game = require("../models/game");


router.route("/").get(gameCtrl.findAllGames)

// router.get("/", (req, res) => {
//   Game.find(function (err, gamesData) {
//     if (err) res.send(500, err.message);

//     console.log("GET /games");
//     res.status(200);
//     res.render("games", {
//       gamesData,
//       title: "Lista de jugadores",
//     });
//     // res.status(200).jsonp(gamesData);
//     console.log(gamesData);
//   });
// });

// exports.findAllGames = function (req, res) {
//   Game.find(function (err, gamesData) {
//     if (err) res.send(500, err.message);

//     console.log("GET /games");
//     res.status(200);
//     res.render("games", {
//       gamesData,
//       title: "Lista de jugadores",
//     });
//     // res.status(200).jsonp(gamesData);
//     console.log(gamesData);
//   });
// };



router.get("/findGame", (req, res) => {
  res.render("findGame");
  Game.findById(req.params.id, function (err, gameId) {
    if (err) return res.send(500, err.message);
    console.log("GET /game/" + gameId);
    res.send(gameId);
  });
});


// router.route("/").get(gameCtrl.findAllGames)


// router.route("/findGame").get(gameCtrl.findById);

// router.route("/findGame/:id").put(gameCtrl.updateGame);
// router.route("/findGame/:id").delete(gameCtrl.deleteGame);




  
module.exports = router;
