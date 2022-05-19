var express = require("express");
var router = express.Router();
var gameCtrl = require("../controllers/games");
var Game = require("../models/game");
var Player = require("../models/player");

router.get("/", function (req, res, next) {
  res.send("Estamos en /game")
  });


router.get("/all", async function (req, res) {
  try {
    const arrayGames = await Game.find();
    console.group("Games");
    console.log(arrayGames);
    console.groupEnd();
    res.render("games", {
      arrayGames,
      title: "Lista de jugadores",
    });
  } catch (error) {
    console.error(error);
  }
});


//Metodo Get para buscar juegos
router.get("/:id", async function (req, res) {
  // res.render("findGame");
  const id = req.params.id;
  try {
    const game = await Game.findById(id);
    res.render("detailsGame", { game, error: false });
    // res.send(game)
  } catch (error) {
    console.error("Error: " + error.message);
    res.render("detailsGame", {
      error: true,
      mensaje: "No se encuentra el ID seleccionado",
    });
  }
});

//Metodo para eliminar juegos
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const game = await Game.findByIdAndDelete(id);
    if (game) {
      res.json({
        status: true,
        message: "The game has been delete!!",
      });
    } else {
      res.json({
        status: false,
        message: "Something went wrong!!",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

//CREACION DE METODO PUT EN PROGRESO
// router.put("/:id", async(req, res) => {
//   const id = req.params.id;
//   try {
//     const game = Game.findByIdAndUpdate(id)
//     game.gamers.player1.score = 3;
//     game.gamers.player2.score = 3;
//     game.gamers.player3.score= 3;
//     game.inProgress= false;
//       game: {
//         gamers: {
//           player1: {
//             score:3,
//           },
//           player2: {
//               score:4,
//           },
//           player3: {
//               score:6,
//           }}
//           ,
//           inProcess:false
//         }

//     res.send(game);
//   } catch (error) {
//     console.log(error);
//   }

// })

//Métodos REST optimizados

// router.route("/").get(gameCtrl.findAllGames)
// router.route("/findGame").get(gameCtrl.findById);
// router.route("/findGame/:id").put(gameCtrl.updateGame);
// router.route("/findGame/:id").delete(gameCtrl.deleteGame);

module.exports = router;
