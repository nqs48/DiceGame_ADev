var express = require("express");
var router = express.Router();
var gameCtrl = require("../controllers/games");

router.route("/").get(gameCtrl.getAddGame).post(gameCtrl.addGame);

module.exports = router;
