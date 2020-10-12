const Competition = require('../models/competition');
const Team = require('../models/team');
const Player = require('../models/Player');
const footballCloud = require('../services/footballCould');

exports.fetchCompetitions = (req, res) => {
  const teamData = [];
  Team.collection.drop();
  Player.collection.drop();
  footballCloud
    .fetchTeams(req.body.code)
    .then((data) => Team.insertMany(data.teams.filter((item) => item.crestUrl)))
    .then((teams) => {
      teamData.push(...teams);
      return footballCloud.fetchPlayersByTeams(teams);
    })
    .then((data) => Promise.all(data.map((item) => item.json())))
    .then((data) => {
      const players = [];
      data.map((item) => item && item.squad && players.push(...item.squad));
      return Player.insertMany(players);
    })
    .then((players) =>
      res.json({
        teams: teamData,
        players,
      })
    )
    .catch((error) => res.status(500).json({ error }));
};

exports.getCompetitons = (req, res) => {
  Competition.find((err, competitions) => {
    if (err) return next(err);

    return res.json(competitions);
  });
};
