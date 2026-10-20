/**
 * Import Model Game
 */
const Game = require("../models/game");

/**
 *  Import Model Player
 */
const Player = require("../models/player");

/**
 * Allowed number of players per game
 */
const MIN_PLAYERS = 2;
const MAX_PLAYERS = 5;
const DEFAULT_PLAYERS = 3;

/**
 * Controller Create Game GET method without request data
 * @param {*} req route's request data
 * @param {*} res route's response data
 */
exports.getCreateGame = (req, res) => {
try {
  res.status(200).render("createGame", {
    title: "Create Game",
    minPlayers: MIN_PLAYERS,
    maxPlayers: MAX_PLAYERS,
    defaultPlayers: DEFAULT_PLAYERS,
  });
} catch (error) {
  res.status(500).render("error",{error, title: "Error"})
}
};

/**
 * Controller Create Game POST method
 * @param {*} req route's request data (players count and nameP{n}/ageP{n} for each player)
 * @param {*} res route's response data
 */
exports.postCreateGame= async (req, res) => {
  const body = req.body;
  const count = Math.min(
    Math.max(parseInt(body.players, 10) || DEFAULT_PLAYERS, MIN_PLAYERS),
    MAX_PLAYERS
  );
  try {
    const gamers = [];
    for (let i = 1; i <= count; i++) {
      gamers.push(
        new Player({
          name: body[`nameP${i}`],
          age: body[`ageP${i}`],
          score: 0,
        })
      );
    }

    const game = new Game({
      gamers,
      inProgress: true,
      winner: null,
    });

    await game.save();
    res.render("detailsGame", {
      game,
      error: false,
      title: "Details Game"
    });
  } catch (error) {
    console.error("Error: " + error.message);
    res.render("detailsGame", {
      error: true,
      title: "Error",
      content: "Something went wrong",
    });
  }
}
