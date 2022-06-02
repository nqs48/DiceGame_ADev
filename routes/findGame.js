const express = require("express");
const router = express.Router();
const findGameCtrl = require("../controllers/findGameCtrl");

/**
 * Router to set the route and method HTTP GET for find all games
 */
router.route("/").get(findGameCtrl.getFindGame);

/**
 * Router to set the route and method HTTP GET for find a game by ID
 */
router.route("/:id").get(findGameCtrl.findByIdGame);


module.exports = router;
