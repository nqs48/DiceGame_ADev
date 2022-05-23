var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render("index", {
    content: "This is a dice game, for three players.",
    title: "🎲  DiceGame | ADev",
  });
});

module.exports = router;
