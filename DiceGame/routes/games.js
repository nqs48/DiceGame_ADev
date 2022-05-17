var express = require("express");
var router = express.Router();
var gameCtrl = require("../controllers/games");



router.route("/").get(gameCtrl.findAllGames)


router
  .route("/findGame/:id")
  .get(gameCtrl.findById)
  .put(gameCtrl.updateGame)
  .delete(gameCtrl.deleteGame);

  
module.exports = router;
