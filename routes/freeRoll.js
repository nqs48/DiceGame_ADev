const express = require("express");
const router = express.Router();
const freeRollCtrl = require("../controllers/freeRollCtrl");

/**
 * Router to set the route and method HTTP GET for free roll mode
 */
router.route("/").get(freeRollCtrl.getFreeRoll);

module.exports = router;
