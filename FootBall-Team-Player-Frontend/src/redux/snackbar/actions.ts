import { SnackbarTypes } from './types';

export const setSuccessNotification = (payload: string) => ({
  type: SnackbarTypes.SET_SUCCESS_NOTIFICATION,
  payload,
});

export const setErrorNotification = (payload: string) => ({
  type: SnackbarTypes.SET_ERROR_NOTIFICATION,
  payload,
});

export const clearNotification = () => ({
  type: SnackbarTypes.CLEAR_NOTIFICATION,
  payload: '',
});

export type SnackbarActions =
  | ReturnType<typeof setSuccessNotification>
  | ReturnType<typeof setErrorNotification>
  | ReturnType<typeof clearNotification>;
