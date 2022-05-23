var express = require("express");
var router = express.Router();
const startGameCtrl= require("../controllers/startGameCtrl")

router.route("/:id").put(startGameCtrl.playGameStarted)


module.exports = router;
