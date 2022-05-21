var express = require("express");
var router = express.Router();
// var gameCtrl = require("../controllers/games");
var Game = require("../models/game");
// var Player = require("../models/player");

router.get("/",(req,res)=>{
res.send("Estamos en la ruta /deleteGame")
})

//Metodo para eliminar juegos
router.get("/:id", async function (req, res) {
  const id = req.params.id;
  console.log("Consola de back: ",id);
  try {
    const game = await Game.findByIdAndDelete(id);
    if (game) {
      res.json({ estado: true, mensaje: "Game deleted!!",game });
    } else {
      res.json({ estado: false, mensaje: "No deleted!!" });
    }
  } catch (err) {
    console.log(err);
  }
});


module.exports = router;
