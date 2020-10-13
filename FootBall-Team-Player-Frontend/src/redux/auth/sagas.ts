import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { getParams, URL } from 'src/utils/api';
import { clearToken, saveToken } from 'src/utils/localStorage';
import {
  AuthActions as ActionType,
  signInSuccess,
  signInError,
  signOutSuccess,
  signOutError,
  signUpError,
  updateProfileSuccess,
  updateProfileError,
} from './actions';
import { AuthActionTypes } from './types';

function* handleSignInRequest({ payload }: ActionType) {
  try {
    const { data } = yield call(
      axios.request,
      getParams(URL.SIGN_IN, 'POST', payload)
    );
    const { token, user } = data;
    saveToken(token);
    yield put(signInSuccess(user));
  } catch (err) {
    yield put(signInError(err));
  }
}

function* handleSignUpRequest({ payload }: ActionType) {
  try {
    yield call(axios.request, getParams(URL.SIGN_UP, 'POST', payload));
  } catch (err) {
    yield put(signUpError(err));
  }
}

function* handleSingOutRequest() {
  try {
    clearToken();
    yield put(signOutSuccess());
    yield call(axios.request, getParams(URL.SIGN_OUT, 'GET'));
  } catch (err) {
    yield put(signOutError(err));
  }
}

function* handleUpdateProfile({ payload }: ActionType) {
  try {
    const { data } = yield call(
      axios.request,
      getParams(URL.UPDATE_PROFILE, 'POST', payload)
    );
    yield put(updateProfileSuccess(data));
  } catch (err) {
    yield put(updateProfileError(err));
  }
}

export default function* authSagas() {
  yield takeLatest(AuthActionTypes.SIGNIN_REQUEST, handleSignInRequest);
  yield takeLatest(AuthActionTypes.SIGNUP_REQUEST, handleSignUpRequest);
  yield takeLatest(AuthActionTypes.SIGNOUT_REQUEST, handleSingOutRequest);
  yield takeLatest(AuthActionTypes.UPDATE_PROFILE, handleUpdateProfile);
}
