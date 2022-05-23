var mongoose = require("mongoose");
var Game = require("../models/game");
var Player = require("../models/player");




exports.getCreateGame = (req, res) => {
try {
  res.status(200).render("createGame",{title: " Create Game"});
} catch (error) {
  res.status(500).render("error",error)
}
};

exports.postCreateGame= async (req, res) => {
  const body = req.body;
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

    var game = new Game({
      gamers: [player1, player2, player3],
      inProgress: true,
      winner: null,
    });

    await game.save(function (err, game) {
      try {
        res.render("detailsGame", {
          game,
          error: false,
        });
      } catch (error) {
        res.render("detailsGame", {
          game,
          error: true,
        });
      }
    });
  } catch (error) {
    res.render("detailsGame", {
      game,
      error: true,
    });
  }
}





// router.post("/", async (req, res) => {
//   const body = req.body;
//   try {
//     var player1 = new Player({
//       name: body.nameP1,
//       age: body.ageP1,
//       score: 0,
//     });
//     var player2 = new Player({
//       name: body.nameP2,
//       age: body.ageP2,
//       score: 0,
//     });
//     var player3 = new Player({
//       name: req.body.nameP3,
//       age: req.body.ageP3,
//       score: 0,
//     });
//     // player1.save();
//     // player2.save();
//     // player3.save();

//     var game = new Game({
//       gamers: [player1, player2, player3],
//       inProgress: true,
//       winner: null,
//     });

//     await game.save(function (err, game) {
//       if (err) {
//         return res.status(500).send(err.message);
//       } else {
//         res.render("detailsGame", {
//           game,
//           error: false,
//         });
//         // res.send(game);
//         res.status(200);
//         // console.log(game);
//       }
//     });
//   } catch (error) {
//     res.render("detailsGame", {
//       game,
//       error: true,
//     });
//     console.error("Error: " + error.message);
//   }
// });






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

// exports.getUpdatedGame = function (req, res) {
//   res.render("playGame", {
//     content: "This is a dice game, for three players",
//     title: "Create Game",
//   });
// };







// GET - Return a game with specified ID
// exports.findById = function (req, res) {
//   res.render("findGame")
//   // Game.findById(req.params.id, function (err, gameId) {
//   // //   if (err) return res.send(500, err.message);

//   //   // console.log("GET /game/" + gameId);
//   //   // res.render("findGame", {
//   //   //   gamesData,
//   //   //   title: "Lista de jugadores",
//   //   // });
//   //   res.status(200).jsonp(gameId);
//   // });
// };



// GET - Returns current created game  // Método Get para crear Juego Formulario Vacio
// exports.getAddGame = function (req, res) {
//     res.render("createGame", {
//       content: "This is a dice game, for three players",
//       title: "Create Game",
//   });
// }




// POST - Insert a new game in the DB // Método Post para crear Juego Formulario diligenciado
// exports.addGame = function (req, res) {

//   var player1 = new Player({
//     name: req.body.nameP1,
//     age: req.body.ageP1,
//     score: 0,
//   });
//   var player2 = new Player({
//     name: req.body.nameP2,
//     age: req.body.ageP2,
//     score: 0,
//   });
//   var player3 = new Player({
//     name: req.body.nameP3,
//     age: req.body.ageP3,
//     score: 0,
//   });
//   player1.save();
//   player2.save();
//   player3.save();


//   var game = new Game({
//     gamers: [player1,player2,player3],
//     inProgress: true,
//   });

//   game.save(function (err, game) {
//     if (err) {
//       return res.status(500).send(err.message);
//     } else {
//       // res.redirect("/games")
//       res.render("getCreateGame", {
//         game
//       });
//       res.status(200);
//       console.log(game);
//     }
//   });
// };


// PUT - Update a register already exists
// exports.updateGame = function (req, res) {

//   Game.findById(req.params.id, function (err, game) {
//     game.inProgress= req.body.inProgress,
//     tvshow.save(function (err) {
//       if (err) return res.status(500).send(err.message);
//       res.status(200).jsonp(game);
//     });
//   });
// };

// // DELETE - Delete a TVShow with specified ID
// exports.deleteGame = function (req, res) {
//   Game.findById(req.params.id, function (err, game) {
//     game.remove(function (err) {
//       if (err) return res.status(500).send(err.message);
//       res.status(200).send();
//     });
//   });
// };
