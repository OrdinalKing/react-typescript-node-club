import { getToken } from './localStorage';

const BASE_URL = 'http://localhost:5000/api/v1';

export const METHOD = {
  DELETE: 'DELETE',
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
};

export const URL = {
  SIGN_IN: '/auth/login',
  SIGN_UP: '/auth/register',
  SIGN_OUT: '/auth/logout',
  FORGOT_PASSWORD: '/auth/forgotpwd',
  UPDATE_PROFILE: '/auth/update_profile',
  FETCH_COMPETITIONS: '/competitions',
  UPDATE_COMPETITIONS: '/competitions',
  FETCH_TEAMS: '/teams',
};

const getEndpoint = (url) => `${BASE_URL}${url}`;

const getHeaders = () => {
  const auth = getToken();

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (auth) {
    headers.Authorization = auth;
  }

  return headers;
};

export const getParams = (url, method, payload = {}) => {
  return {
    headers: getHeaders(),
    data: payload,
    method,
    url: getEndpoint(url),
  };
};

export const getFootballParams = () => {
  return {
    headers: {
      'X-Auth-Token': 'e05b9c5dae39409cb148e716e5058fef',
      Accept: 'text/plain',
      'Content-Type': 'text/plain',
    },
    method: 'GET',
    url: 'https://api.football-data.org/v2/competitions',
    dataType: 'json',
  };
};
