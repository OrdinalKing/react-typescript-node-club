import { User } from 'src/models';
import { AuthActionTypes } from './types';

export const signInRequest = (user: User) => ({
  type: AuthActionTypes.SIGNIN_REQUEST,
  payload: user,
});

export const signInSuccess = (user: User) => ({
  type: AuthActionTypes.SIGNIN_REQUEST_SUCCESS,
  payload: user,
});

export const signInError = (err: string) => ({
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

export const signUpError = (err: string) => ({
  type: AuthActionTypes.SIGNUP_REQUEST_ERROR,
  payload: err,
});

export const signOutRequest = (payload?: string) => ({
  type: AuthActionTypes.SIGNOUT_REQUEST,
  payload,
});

export const signOutSuccess = (payload?: string) => ({
  type: AuthActionTypes.SIGNOUT_REQUEST_SUCCESS,
  payload,
});

export const signOutError = (err: string) => ({
  type: AuthActionTypes.SIGNOUT_REQUEST_ERROR,
  payload: err,
});

export const updateProfile = (payload: any) => ({
  type: AuthActionTypes.UPDATE_PROFILE,
  payload,
});

export const updateProfileSuccess = (payload: User) => ({
  type: AuthActionTypes.UPDATE_PROFILE_SUCESS,
  payload,
});

export const updateProfileError = (payload: string) => ({
  type: AuthActionTypes.UPDATE_PROFILE_ERROR,
  payload,
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
  | ReturnType<typeof signOutError>
  | ReturnType<typeof updateProfile>
  | ReturnType<typeof updateProfileSuccess>
  | ReturnType<typeof updateProfileError>;
