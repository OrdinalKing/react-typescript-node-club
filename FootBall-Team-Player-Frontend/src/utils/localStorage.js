export const AUTH_TOKEN = 'AUTH_TOKEN';
export const AUTH_USER = 'AUTH_USER';

export const getToken = () => {
  return localStorage.getItem(AUTH_TOKEN);
};

export const saveToken = (token) => {
  localStorage.setItem(AUTH_TOKEN, token);
};

export const clearToken = () => {
  localStorage.removeItem(AUTH_TOKEN);
};

export const loggedIn = () => {
  return !!getToken();
};
