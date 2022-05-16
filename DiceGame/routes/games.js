var express = require("express");
var router = express.Router();
var gameCtrl = require("../controllers/games");



router.route("/").get(gameCtrl.findAllGames)


router
  .route("/findGame/:id")
  .get(gameCtrl.findById)
  .put(gameCtrl.updateGame)
  .delete(gameCtrl.deleteGame);

























// /* GET users listing. */
// router.get("/", function (req, res, next) {
//   // res.json({
//   //   message: 'Hello este es',
//   //   content: 'Mensaje'
//   // })
//   const data = game.find();
//   data
//   .then(result => {
//     console.log("Los resultados son los siguientes: ", result);
//     res.send(result);
//   }
//   )
//   .catch(err => {
//     console.error("Ocurrió un error:" , err)
//   });
// });


// router.post("/createGame",function (req, res, next) {
//   console.log("POST");
//   console.log(req.body); //Imprime los datos Enviados

//   var game = new Game({
//     title: req.body.title,
//     year: req.body.year,
//     country: req.body.country,
//     poster: req.body.poster,
//     seasons: req.body.seasons,
//     genre: req.body.genre,
//     summary: req.body.summary,
//   });

//   tvshow.save(function (err, tvshow) {
//     if (err) {
//       return res.status(500).send(err.message);
//     } else {
//       res.status(200).jsonp(tvshow);
//       console.log(tvshow);
//     }
//   });
// })




module.exports = router;
