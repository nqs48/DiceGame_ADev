var express = require("express");
var router = express.Router();
var gameCtrl = require("../controllers/games");
var Game = require("../models/game");
var Player = require("../models/player");


// router.route("/").get(gameCtrl.findAllGames)

router.get("/", (req,res)=>{
  res.send("Hola estoy en el index de api")
})


router.get("/games", async function(req, res) {
  try {
    const arrayGames= await Game.find();
    console.group("Games")
    console.log(arrayGames);
    console.groupEnd();
    res.render("games", {
      arrayGames,
      title: "Lista de jugadores",
    });
  } catch (error) {
    console.error(error);
  }

})

//Get de vista con formulario para crear juego
router.get("/createGame",async (req,res)=>{
  res.render("createGame")
})

router.post("/createGame",async (req,res)=>{
  const body= req.body;
  try {
    var player1 = new Player({
      name: body.nameP1,
      age: body.ageP1,
      score: 0,
    });
    var player2 = new Player({
      name: body.nameP2,
      age: body.ageP2,
      score: 0,
    });
    var player3 = new Player({
      name: req.body.nameP3,
      age: req.body.ageP3,
      score: 0,
    });
    player1.save();
    player2.save();
    player3.save();

    var game = new Game({
      gamers: [player1, player2, player3],
      inProgress: true,
    });

    await game.save(function (err, game) {
      if (err) {
        return res.status(500).send(err.message);
      } else {
        res.render("detailsGame", {
          game,
          error: false,
        });
        // res.send(game);
        res.status(200);
        // console.log(game);
      }
    });
    
  } catch (error) {
    res.render("detailsGame", {
      game,
      error: true,
    });
    console.error("Error: "+ error.message)
  }

})

//Metodo Get para buscar juegos
router.get("/:id", async function (req, res) {
  // res.render("findGame"); 
  const id=req.params.id;
  try{
    const game = await Game.findById(id);
    res.render("detailsGame", {game, error: false});  
    // res.send(game)
  }catch (error) {
    console.error("Error: "+ error.message)
     res.render("detailsGame", {error: true, mensaje: "No se encuentra el ID seleccionado" });  
  }
})




// router.get("/", (req, res) => {
//   Game.find(function (err, gamesData) {
//     if (err) res.send(500, err.message);

//     console.log("GET /games");
//     res.status(200);
//     res.render("games", {
//       gamesData,
//       title: "Lista de jugadores",
//     });
//     // res.status(200).jsonp(gamesData);
//     console.log(gamesData);
//   });
// });




// exports.findAllGames = function (req, res) {
//   Game.find(function (err, gamesData) {
//     if (err) res.send(500, err.message);

//     console.log("GET /games");
//     res.status(200);
//     res.render("games", {
//       gamesData,
//       title: "Lista de jugadores",
//     });
//     // res.status(200).jsonp(gamesData);
//     console.log(gamesData);
//   });
// };



// router.get("/findGame", (req, res) => {
//   res.render("findGame");
//   Game.findById(req.params.id, function (err, gameId) {
//     if (err) return res.send(500, err.message);
//     console.log("GET /game/" + gameId);
//     res.send(gameId);
//   });
// });


// router.route("/").get(gameCtrl.findAllGames)


// router.route("/findGame").get(gameCtrl.findById);

// router.route("/findGame/:id").put(gameCtrl.updateGame);
// router.route("/findGame/:id").delete(gameCtrl.deleteGame);




  
module.exports = router;
