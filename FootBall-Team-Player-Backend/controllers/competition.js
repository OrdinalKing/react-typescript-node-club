const Competition = require('../models/competition');
const config = require('../config');
const API = require('../middlewares/api');

exports.fetchCompetitions = (req, res) => {
  console.log('req', req.body.codes);
  console.log(
    '123123123',
    config.apiKey,
    `${API.DATA_BASE_URL}/competitions/${req.body.codes[0]}/teams`
  );
  fetch(`${API.DATA_BASE_URL}/competitions/${req.body.codes[0]}/teams`, {
    headers: {
      'X-Auth-Token': config.apiKey,
    },
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => console.log('123123123', data));
  return res.json({ message: 'successful' });
};

exports.getCompetitons = (req, res) => {
  Competition.find((err, competitions) => {
    if (err) return next(err);

    return res.json(competitions);
  });
};
