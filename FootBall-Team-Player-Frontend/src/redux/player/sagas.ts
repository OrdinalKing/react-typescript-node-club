import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { getParams, URL } from 'src/utils/api';
import { getPlayersSuccess, getPlayersError } from './actions';
import { PlayerTypes } from './types';

function* handleGetPlayers() {
  try {
    const { data } = yield call(
      axios.request,
      getParams(URL.FETCH_PLAYERS, 'POST')
    );
    yield put(getPlayersSuccess(data));
  } catch (err) {
    yield put(getPlayersError(err));
  }
}

export default function* playerSaga() {
  yield takeLatest(PlayerTypes.GET_PLAYERS_REQUEST, handleGetPlayers);
}
