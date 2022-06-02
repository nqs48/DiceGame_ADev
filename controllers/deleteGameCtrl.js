/**
 * Import Model Game 
 */
const Game = require("../models/game");

/**
 * Controller delete Game GET method with request and response data
 * @param {*} req route's request data (ID Game from UI View) 
 * @param {*} res route's response data (UI View) 
 */
exports.deleteByIdGame= async function (req, res) {
  const id = req.params.id;
  try {
    const game = await Game.findByIdAndDelete(id);
    if (game) {
      res.json({ estado: true, mensaje: "Game deleted!!", game });
    } else {
      res.json({ estado: false, mensaje: "No deleted!!" });
    }
  } catch (error) {
    console.log(err);
  }
};
