var express = require("express");
var router = express.Router();
const gamesCtrl = require("../controllers/gamesCtrl")

/**
 * Router to set the route and method HTTP GET and POST for create game
 */
router.route("/").get(gamesCtrl.AllGames)


module.exports = router;
