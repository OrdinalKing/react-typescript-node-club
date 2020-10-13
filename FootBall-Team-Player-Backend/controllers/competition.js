const Competition = require('../models/competition');
const Team = require('../models/team');
const Player = require('../models/player');
const footballCloud = require('../services/footballCould');

exports.updateCompetitionDetails = (req, res) => {
  const newTeams = [];
  const newPlayers = [];
  footballCloud
    .fetchTeams(req.body.code)
    .then((data) => {
      newTeams.push(...data.teams.filter((item) => item.crestUrl));
      const ids = newTeams.map((team) => team.id);
      return Team.deleteMany({ id: { $in: ids } });
    })
    .then(() => Team.insertMany(newTeams))
    .then((teams) => footballCloud.fetchPlayersByTeams(teams))
    .then((data) => Promise.all(data.map((item) => item.json())))
    .then((data) => {
      const players = [];
      data.map((item) => item && item.squad && players.push(...item.squad));

      let duplicate = {};
      for (let player of players) {
        if (!duplicate[player.id]) {
          duplicate[player.id] = 1;
          newPlayers.push(player);
        }
      }
      const ids = newPlayers.map((player) => player.id);
      return Player.deleteMany({ id: { $in: ids } });
    })
    .then(() => Player.insertMany(newPlayers))
    .then(() => {
      const competition = new Competition(req.body);
      return competition.save();
    })
    .then(() => Competition.find())
    .then((competitions) => res.json(competitions))
    .catch((error) => res.status(500).json({ error }));
};

exports.getCompetitons = (req, res) => {
  Competition.find((err, competitions) => {
    if (err) return next(err);

    return res.json(competitions);
  });
};
