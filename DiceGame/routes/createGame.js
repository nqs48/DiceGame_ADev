var express = require("express");
var router = express.Router();
var gameCtrl = require("../controllers/games");

router.route("/").get(gameCtrl.getAddGame)

router.route("/").post(gameCtrl.addGame);

module.exports = router;
