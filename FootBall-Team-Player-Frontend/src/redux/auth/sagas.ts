import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { getParams, METHOD, URL } from 'src/utils/api';
import {
  clearToken,
  clearUser,
  saveToken,
  saveUser,
} from 'src/utils/localStorage';
import {
  AuthActions as ActionType,
  signInSuccess,
  signInError,
  signOutSuccess,
  signOutError,
  signUpSuccess,
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
    saveUser(user);
    yield put(signInSuccess(user));
  } catch (err) {
    yield put(signInError(err));
  }
}

function* handleSignUpRequest({ payload }: ActionType) {
  try {
    const { data } = yield call(
      axios.request,
      getParams(URL.SIGN_UP, METHOD.POST, payload)
    );
    const { user } = data;
    yield put(signUpSuccess(user));
  } catch (err) {
    yield put(signUpError(err));
  }
}

function* handleSingOutRequest({ payload }: ActionType) {
  try {
    yield call(axios.request, getParams(URL.SIGN_OUT, METHOD.GET));
    clearToken();
    clearUser();
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
