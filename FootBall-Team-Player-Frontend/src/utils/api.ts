import { AxiosRequestConfig, Method } from 'axios';
import { getToken } from './localStorage';

const BASE_URL = 'http://localhost:5000/api/v1';

export const URL = {
  SIGN_IN: '/auth/login',
  SIGN_UP: '/auth/register',
  SIGN_OUT: '/auth/logout',
  FORGOT_PASSWORD: '/auth/forgotpwd',
  UPDATE_PROFILE: '/auth/update_profile',
  UPDATE_COMPETITION: '/competition/import',
  GET_COMPETITIONS: '/competition/list',
  GET_TEAMS: '/team/list',
  GET_PLAYERS: '/player/list',
};

const getEndpoint = (url: string): string => `${BASE_URL}${url}`;

const getHeaders = () => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: getToken(),
  };
};

export const getParams = (
  url: string,
  method: Method,
  payload = {}
): AxiosRequestConfig => {
  return {
    headers: getHeaders(),
    data: payload,
    method,
    url: getEndpoint(url),
  };
};

export const getFootballParams = (): AxiosRequestConfig => {
  return {
    headers: {
      'X-Auth-Token': 'e05b9c5dae39409cb148e716e5058fef',
      Accept: 'text/plain',
      'Content-Type': 'text/plain',
    },
    method: 'GET',
    url: 'https://api.football-data.org/v2/competitions',
  };
};
