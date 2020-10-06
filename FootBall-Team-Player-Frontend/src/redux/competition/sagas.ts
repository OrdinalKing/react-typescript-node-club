import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { getParams, URL, getFootballParams } from 'src/utils/api';
import {
  CompetitionActions as ActionType,
  fetchCompetitionSuccess,
  fetchCompetitionError,
  updateCompetitonSuccess,
  updateCompetitionError,
} from './actions';
import { CompetitionTypes } from './types';

function* handleFetchCompetition() {
  try {
    const { data } = yield call(axios.request, getFootballParams());
    const { competitions } = data;
    yield put(fetchCompetitionSuccess(competitions));
  } catch (err) {
    yield put(fetchCompetitionError(err));
  }
}

function* handleUpdateCompetition({ payload }: ActionType) {
  try {
    const { data } = yield call(
      axios.request,
      getParams(URL.UPDATE_COMPETITIONS, 'POST', { codes: ['CL'] })
    );
    console.log(payload);
    yield put(updateCompetitonSuccess(data));
  } catch (err) {
    yield put(updateCompetitionError(err));
  }
}

export default function* competitionSaga() {
  yield takeLatest(CompetitionTypes.COMPETITON_REQUEST, handleFetchCompetition);
  yield takeLatest(
    CompetitionTypes.UPDATE_COMPETITION_REQUEST,
    handleUpdateCompetition
  );
}
