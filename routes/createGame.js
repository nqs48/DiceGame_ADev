const express = require("express");
const router = express.Router();
const gameCreateCtrl = require("../controllers/createGameCtrl");

/**
 * Router to set the route and method HTTP GET and POST for create game
 */
router
  .route("/")
  .get(gameCreateCtrl.getCreateGame)
  .post(gameCreateCtrl.postCreateGame);


module.exports = router;
