const Team = require('../models/team');

exports.getTeams = (req, res) => {
  Team.find((err, teams) => {
    if (err) {
      return next(err);
    }

    return res.json(teams);
  });
};
