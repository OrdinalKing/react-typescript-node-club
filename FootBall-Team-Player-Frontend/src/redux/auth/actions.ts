import { AuthActionTypes, User } from './types';

export const signInRequest = (user: User) => ({
  type: AuthActionTypes.SIGNIN_REQUEST,
  payload: user,
});

export const signInSuccess = (user: User) => ({
  type: AuthActionTypes.SIGNIN_REQUEST_SUCCESS,
  payload: user,
});

export const signInError = (err: String) => ({
  type: AuthActionTypes.SIGNIN_REQUEST_ERROR,
  payload: err,
});

export const signUpRequest = (user: User) => ({
  type: AuthActionTypes.SIGNUP_REQUEST,
  payload: user,
});

export const signUpSuccess = (user: User) => ({
  type: AuthActionTypes.SIGNUP_REQUEST_SUCESS,
  payload: user,
});

export const signUpError = (err: String) => ({
  type: AuthActionTypes.SIGNUP_REQUEST_ERROR,
  payload: err,
});

export const signOutRequest = (payload?: String) => ({
  type: AuthActionTypes.SIGNOUT_REQUEST,
  payload: payload,
});

export const signOutSuccess = (payload?: String) => ({
  type: AuthActionTypes.SIGNOUT_REQUEST_SUCCESS,
  payload: payload,
});

export const signOutError = (err: String) => ({
  type: AuthActionTypes.SIGNOUT_REQUEST_ERROR,
  payload: err,
});

export type AuthActions =
  | ReturnType<typeof signInRequest>
  | ReturnType<typeof signInSuccess>
  | ReturnType<typeof signInError>
  | ReturnType<typeof signUpRequest>
  | ReturnType<typeof signUpSuccess>
  | ReturnType<typeof signUpError>
  | ReturnType<typeof signOutRequest>
  | ReturnType<typeof signOutSuccess>
  | ReturnType<typeof signOutError>;
