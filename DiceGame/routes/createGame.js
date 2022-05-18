var express = require("express");
var router = express.Router();
var gameCtrl = require("../controllers/games");

// router.route("/").get(gameCtrl.getAddGame)

// router.route("/").post(gameCtrl.addGame);



// //Metodos directos sin capa de controllers
// router.get("/", (req,res) => {
//   res.send("Pagina Crear Juego")
// })


// router.get("/servicios",(req,res)=>{
//   // res.send("Pagina crear juego con router createGame/servicios");
//   res.render("findGame")
// })





module.exports = router;
