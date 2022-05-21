var express = require("express");
var router = express.Router();
// var gameCtrl = require("../controllers/games");
var Game = require("../models/game");

router.get("/", async function (req, res) {
  try {
    const arrayGames = await Game.find();
    console.group("Games");
    console.log(arrayGames);
    console.groupEnd();
    res.render("games", {
      arrayGames,
      title: "Lista de jugadores",
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/test", (req, res) => {
  res.send("Ok get");
});

router.post("/test", (req, res) => {
  // res.send(req.body.id);
  const body = req.body;
  console.log("CONSOLE DIRECT:", req.body.id);
});

module.exports = router;
