const express = require("express");
const router = express.Router();
const viewWinnerCtrl = require("../controllers/viewWinnerCtrl");

/**
 * Router to set the route and method HTTP GET for find a game and get the winner
 */
router.route("/:id").get(viewWinnerCtrl.viewWinner);



module.exports = router;
