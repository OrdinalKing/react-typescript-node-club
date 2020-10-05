import { getToken } from './localStorage';

const BASE_URL = 'http://localhost:5000/api/v1/';

export const METHOD = {
  DELETE: 'DELETE',
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
};

export const URL = {
  SIGN_IN: 'auth/login',
  SIGN_UP: 'auth/register',
  SIGN_OUT: 'auth/logout',
  FORGOT_PASSWORD: 'auth/forgotpwd',
  UPDATE_PROFILE: 'auth/update_profile',
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
    header: getHeaders(),
    data: payload,
    method,
    url: getEndpoint(url),
  };
};
