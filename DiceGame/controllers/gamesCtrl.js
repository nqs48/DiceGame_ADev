/**
 * Import Model Game 
 */
const Game = require("../models/game");

/**
 * Controller find all Games GET method only response data
 * @param {*} req route's request data (none)
 * @param {*} res route's response data (output- UI View)
 */
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


