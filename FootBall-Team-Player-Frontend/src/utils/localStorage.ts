export const AUTH_TOKEN = 'AUTH_TOKEN';
export const AUTH_USER = 'AUTH_USER';

export const getToken = (): string => {
  return `Bearer ${localStorage.getItem(AUTH_TOKEN)}` || '';
};

export const saveToken = (token: string): void => {
  localStorage.setItem(AUTH_TOKEN, token);
};

export const clearToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN);
};

export const loggedIn = (): boolean => {
  return !!getToken();
};
