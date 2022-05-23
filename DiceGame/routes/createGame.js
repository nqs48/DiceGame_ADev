const express = require("express");
const router = express.Router();
const gameCreateCtrl = require("../controllers/createGameCtrl");

router
  .route("/")
  .get(gameCreateCtrl.getCreateGame)
  .post(gameCreateCtrl.postCreateGame);


module.exports = router;
