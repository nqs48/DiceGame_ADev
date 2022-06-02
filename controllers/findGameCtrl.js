/**
 * Import Model Game 
 */
const Game = require("../models/game");

/**
 * Controller find Game GET method only response data
 * @param {*} req route's request data (none)
 * @param {*} res route's response data (UI View)
 */
exports.getFindGame = (req, res) => {
  try {
    res.status(200).render("findGame", { title: "Find Game" });
  } catch (error) {
    res.status(500).render("error", { error, title: "Error" });
  }
};

/**
 * Controller find Game GET method with response and request data
 * @param {*} req route's request data (input- Id Game from UI View) 
 * @param {*} res route's request data (output- UI View) 
 */
exports.findByIdGame = async (req, res) => {
  const id = req.params.id;
  try {
    const game = await Game.findById(id);
    res.render("detailsGame", { game, error: false, title: "Details Game"});
  } catch (error) {
    console.error("Error: " + error.message);
    res.render("detailsGame", {
      error: true,
      title: "Can't Find",
      content: "We cant find any game with this ID",
    });
  }
};


