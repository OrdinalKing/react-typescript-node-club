const fetch = require('node-fetch');
const config = require('../config');
const API = require('../middlewares/api');

const params = {
  headers: {
    'X-Auth-Token': config.apiKey,
    Accept: 'text/plain',
    'Content-Type': 'text/plain',
  },
  method: 'get',
};

exports.fetchTeams = async (code) => {
  try {
    const response = await fetch(
      `${API.DATA_BASE_URL}/competitions/${code}/teams`,
      params
    );
    return response.json();
  } catch (err) {
    throw err;
  }
};

exports.fetchPlayersByTeams = async (teams) => {
  try {
    const promises = teams.map((team) =>
      fetch(`http://api.football-data.org/v2/teams/${team.id}`, params)
    );
    return Promise.all(promises);
  } catch (err) {
    throw err;
  }
};
