const Player = require('../models/player');
const Query = require('../utils/query');

exports.getPlayers = (req, res) => {
  const query = Query.getQuery(req.body);
  Player.find(query, (err, players) => {
    if (err) {
      return next(err);
    }

    return res.json(players);
  });
};
