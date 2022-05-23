const Game = require("../models/game");
const main = require("../public/javascripts/app");

exports.playGameStarted = async function (req, res) {
  const id = req.params.id;
  const throwDice = main.randomNumbers();
  const maxNum = Math.max.apply(null, throwDice);
  const winnerIndex = throwDice.indexOf(maxNum);

  try {
    const game = await Game.findById(id);

    for (let i = 0; i < game.gamers.length; i++) {
      game.gamers[i].score = throwDice[i];
    }
    const playerWinner = game.gamers[winnerIndex];

    const body = {
      gamers: game.gamers,
      inProgress: false,
      winner: playerWinner,
    };

    try {
      const game = await Game.findByIdAndUpdate(id, body, {
        useFindAndModify: false,
      });
      console.log(game);
      res.json({ status: true, message: "Game played successfully!!" });
    } catch (err) {
      console.log(err);
      res.json({ status: false, message: "Something went wrong!!" });
    }
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: "Something went wrong!!" });
  }
};
