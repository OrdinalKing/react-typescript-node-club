import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { getParams, METHOD, URL } from 'src/utils/api';
import { fetchTeamSuccess, fetchTeamError } from './actions';
import { TeamTypes } from './types';

function* handleFetchTeam() {
  try {
    const { data } = yield call(
      axios.request,
      getParams(URL.FETCH_TEAMS, METHOD.GET)
    );
    yield put(fetchTeamSuccess(data.teams));
  } catch (err) {
    yield put(fetchTeamError(err));
  }
}

export default function* teamSaga() {
  yield takeLatest(TeamTypes.TEAM_REQUEST, handleFetchTeam);
}
