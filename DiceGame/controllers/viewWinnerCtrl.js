/**
 * Import Model Game 
 */
const Game = require("../models/game");

/**
 * Controller view winner GET method with response and request data
 * @param {*} req route's request data (input- Id Game from UI View)
 * @param {*} res route's response data (output- UI View)
 */
exports.viewWinner= async function (req, res) {
  const id = req.params.id;
  try {
    const game = await Game.findById(id);
    res.render("winnerGame", { game, error: false, title: "Winner Game" });
  } catch (error) {
    console.error("Error: " + error.message);
    res.render("winnerGame", {
      error: true,
      title: "Winner Game",
      content: "Something went wrong",
    });
  }
}

