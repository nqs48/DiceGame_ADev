var express = require('express');
var router = express.Router();

//RUTA APP "/api"

/* GET home page. -> Se especifica el nombre del archivo a renderizar */
router.get('/', function(req, res, next) {
  res.render("index", {
    content: "This is a dice game, for three players",
    title: "🎲  DiceGame | ADev",
  });
});


// router.get("/prueba", function (req, res, next) {
//   res.render("index", {
//     content: "This is a dice game, for three players",
//     title: "🎲  DiceGame | ADev",
//   });
// });

module.exports = router;
