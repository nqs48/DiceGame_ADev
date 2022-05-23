const Game = require("../models/game");

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

