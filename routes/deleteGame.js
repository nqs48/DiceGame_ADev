const express = require("express");
const router = express.Router();
const deleteGameCtrl = require("../controllers/deleteGameCtrl");

/**
 * Router to set the route and method HTTP GET for delete game
 */
router.route("/:id").get(deleteGameCtrl.deleteByIdGame);

module.exports = router;
