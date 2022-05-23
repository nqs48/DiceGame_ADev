const express = require("express");
const router = express.Router();
const findGameCtrl = require("../controllers/findGameCtrl");

router.route("/").get(findGameCtrl.getFindGame);
router.route("/:id").get(findGameCtrl.findByIdGame);


module.exports = router;
