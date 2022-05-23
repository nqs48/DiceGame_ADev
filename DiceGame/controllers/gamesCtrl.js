const Game = require("../models/game");

exports.AllGames= async (req, res)=> {
  try {
    const arrayGames = await Game.find();
    res.status(200).render("games", {
      arrayGames,
      title: " All Games",
    });
  } catch (error) {
    res.render("error", {title: "Error"});
  }
}


