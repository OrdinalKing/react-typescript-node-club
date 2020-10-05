import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { getParams, METHOD, URL } from 'src/utils/api';
import history from 'src/utils/history';
import { clearToken, saveToken } from 'src/utils/localStorage';
import {
  AuthActions as ActionType,
  signInSuccess,
  signInError,
  signOutSuccess,
  signOutError,
  signUpError,
} from './actions';
import { AuthActionTypes } from './types';

function* handleSignInRequest({ payload }: ActionType) {
  try {
    const { data } = yield call(
      axios.request,
      getParams(URL.SIGN_IN, METHOD.POST, payload)
    );
    const { token, user } = data;
    saveToken(token);
    yield put(signInSuccess(user));
    history.push('/home');
  } catch (err) {
    yield put(signInError(err));
  }
}

function* handleSignUpRequest({ payload }: ActionType) {
  try {
    yield call(axios.request, getParams(URL.SIGN_UP, METHOD.POST, payload));
    history.push('/login');
  } catch (err) {
    yield put(signUpError(err));
  }
}

function* handleSingOutRequest() {
  try {
    clearToken();
    yield call(axios.request, getParams(URL.SIGN_OUT, METHOD.GET));
    yield put(signOutSuccess());
  } catch (err) {
    yield put(signOutError(err));
  }
}

export default function* authSagas() {
  yield takeLatest(AuthActionTypes.SIGNIN_REQUEST, handleSignInRequest);
  yield takeLatest(AuthActionTypes.SIGNUP_REQUEST, handleSignUpRequest);
  yield takeLatest(AuthActionTypes.SIGNOUT_REQUEST, handleSingOutRequest);
}
