const fetch = require('node-fetch');

const Competition = require('../models/competition');
const Team = require('../models/team');
const config = require('../config');
const API = require('../middlewares/api');

exports.fetchCompetitions = (req, res) => {
  fetch(`${API.DATA_BASE_URL}/competitions/${req.body.codes[0]}/teams`, {
    headers: {
      'X-Auth-Token': config.apiKey,
      Accept: 'text/plain',
      'Content-Type': 'text/plain',
    },
    method: 'get',
  })
    .then((response) => response.json())
    .then((data) => Team.insertMany(data.teams.filter((team) => team.crestUrl)))
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ error }));
};

exports.getCompetitons = (req, res) => {
  Competition.find((err, competitions) => {
    if (err) return next(err);

    return res.json(competitions);
  });
};
