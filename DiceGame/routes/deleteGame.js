const express = require("express");
const router = express.Router();
const deleteGameCtrl = require("../controllers/deleteGameCtrl");


router.route("/:id").get(deleteGameCtrl.deleteByIdGame);

module.exports = router;
