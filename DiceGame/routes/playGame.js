var express = require("express");
var router = express.Router();
var gameCtrl = require("../controllers/games");
var main = require("../public/javascripts/app");


router.route("/").get(gameCtrl.getAddGame).post(gameCtrl.addGame);


function playGame(idGame) {
  var throwDice = main.randomNumbers();
  router.put(gameCtrl.updateGame);
}









