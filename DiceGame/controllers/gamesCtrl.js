var mongoose = require("mongoose");
var Game = require("../models/game");


exports.AllGames= async (req, res)=> {
  try {
    const arrayGames = await Game.find();
    res.status(200).render("games", {
      arrayGames,
      title: "Lista de jugadores",
    });
  } catch (error) {
    res.render("error");
  }
}


