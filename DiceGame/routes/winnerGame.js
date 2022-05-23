const express = require("express");
const router = express.Router();
const viewWinnerCtrl = require("../controllers/viewWinnerCtrl");

router.route("/:id").get(viewWinnerCtrl.viewWinner);



module.exports = router;
