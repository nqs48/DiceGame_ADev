var express = require("express");
var router = express.Router();
const gamesCtrl = require("../controllers/gamesCtrl")

router.route("/").get(gamesCtrl.AllGames)


module.exports = router;
