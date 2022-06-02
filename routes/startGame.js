var express = require("express");
var router = express.Router();
const startGameCtrl= require("../controllers/startGameCtrl")

/**
 * Router to set the route and method HTTP PUT to Play game and set a new data for the game 
 */
router.route("/:id").put(startGameCtrl.playGameStarted)


module.exports = router;
