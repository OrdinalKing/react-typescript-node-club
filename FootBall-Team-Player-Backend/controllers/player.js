const Player = require('../models/Player');

exports.getPlayers = (req, res) => {
  Player.find((err, players) => {
    if (err) {
      return next(err);
    }

    return res.json(players);
  });
};
