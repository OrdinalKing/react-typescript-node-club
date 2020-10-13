const Team = require('../models/team');
const Query = require('../utils/query');

exports.getTeams = (req, res) => {
  const query = Query.getQuery(req.body);
  Team.find(query, (err, teams) => {
    if (err) {
      return next(err);
    }

    return res.json(teams);
  });
};
