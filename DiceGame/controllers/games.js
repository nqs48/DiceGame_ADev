//File: controllers/tvshows.js
var mongoose = require("mongoose");
var Game = require("../models/game");

// GET - Return all games in the DB
exports.findAllGames = function (req, res) {
  Game.find(function (err, gamesData) {
    if (err) res.send(500, err.message);

    console.log("GET /games");
    res.status(200)
    res.render("games", {
      gamesData,
      title: "Lista de jugadores",
    });
    // res.status(200).jsonp(gamesData);
    console.log(gamesData);
  });
};


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









// GET - Return a game with specified ID
exports.findById = function (req, res) {
  Game.findById(req.params.id, function (err, gameId) {
    if (err) return res.send(500, err.message);

    console.log("GET /game/" + gameId);
    res.render("games", {
      gamesData,
      title: "Lista de jugadores",
    });
    res.status(200).jsonp(gameId);
  });
};


exports.getAddGame = function (req, res) {
    res.render("createGame", {
      content: "This is a dice game, for three players",
      title: "express",
  });
}


// POST - Insert a new TVShow in the DB
exports.addGame = function (req, res) {
  console.log("POST");
 console.log(req.body);  //Imprime los datos Enviados

  var game = new Game({
    player1: req.body.player1,
    player2: req.body.player2,
    player3: req.body.player3,
    inProgress: false,
  });

  game.save(function (err, game) {
    if (err) {
      return res.status(500).send(err.message);
    } else {
      res.render("getCreateGame", {
        game
      });
      res.status(200);
      console.log(game);
    }
  });
};

// PUT - Update a register already exists
exports.updateGame = function (req, res) {
  Game.findById(req.params.id, function (err, game) {
    game.inProgress= req.body.inProgress,
    tvshow.save(function (err) {
      if (err) return res.status(500).send(err.message);
      res.status(200).jsonp(game);
    });
  });
};

// DELETE - Delete a TVShow with specified ID
exports.deleteGame = function (req, res) {
  Game.findById(req.params.id, function (err, game) {
    game.remove(function (err) {
      if (err) return res.status(500).send(err.message);
      res.status(200).send();
    });
  });
};
