import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { getParams, URL } from 'src/utils/api';
import {
  TeamActions as ActionType,
  getTeamsSuccess,
  getTeamsError,
} from './actions';
import { TeamTypes } from './types';

function* handleGetTeams({ payload }: ActionType) {
  try {
    const { data } = yield call(
      axios.request,
      getParams(URL.GET_TEAMS, 'POST', payload)
    );
    yield put(getTeamsSuccess(data));
  } catch (err) {
    yield put(getTeamsError(err));
  }
}

export default function* teamSaga() {
  yield takeLatest(TeamTypes.GET_TEAMS_REQUEST, handleGetTeams);
}
