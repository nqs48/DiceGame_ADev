/**
 * Import Model Game 
 */
const Game = require("../models/game");

/**
 *  Import Model Player
 */
const Player = require("../models/player");

/**
 * Controller Create Game GET method without request data
 * @param {*} req route's request data 
 * @param {*} res route's response data 
 */
exports.getCreateGame = (req, res) => {
try {
  res.status(200).render("createGame",{title: "Create Game"});
} catch (error) {
  res.status(500).render("error",{error, title: "Error"})
}
};

/**
 * Controller Create Game POST method
 * @param {*} req route's request data 
 * @param {*} res route's response data
 */
exports.postCreateGame= async (req, res) => {
  const body = req.body;
  try {
    const player1 = new Player({
      name: body.nameP1,
      age: body.ageP1,
      score: 0,
    });
    const player2 = new Player({
      name: body.nameP2,
      age: body.ageP2,
      score: 0,
    });
    const player3 = new Player({
      name: req.body.nameP3,
      age: req.body.ageP3,
      score: 0,
    });

    const game = new Game({
      gamers: [player1, player2, player3],
      inProgress: true,
      winner: null,
    });

    await game.save(function (err, game) {
      try {
        res.render("detailsGame", {
          game,
          error: false,
          title: "Details Game"
        });
      } catch (error) {
        res.render("detailsGame", {
          error: true,
          title: "Error",
          content: "Something went wrong"
        });
      }
    });
  } catch (error) {
    res.render("detailsGame", {
      error: true,
      title: "Error",
      content: "Something went wrong",
    });
  }
}
