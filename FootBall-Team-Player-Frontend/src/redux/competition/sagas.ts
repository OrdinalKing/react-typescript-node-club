// import { call, put, takeLatest } from 'redux-saga/effects';
// import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// import { getFootballParams, METHOD, FootballURL } from 'src/utils/api';
import competitions from 'src/utils/mock';
import { fetchCompetitionSuccess, fetchCompetitionError } from './actions';
import { CompetitionTypes } from './types';

function* handleFetchCompetition() {
  try {
    // const { data } = yield call(
    //   axios.request,
    //   getFootballParams(FootballURL.COMPETITIONS, METHOD.GET)
    // );
    // const { competitions } = data;
    yield put(fetchCompetitionSuccess(competitions));
  } catch (err) {
    yield put(fetchCompetitionError(err));
  }
}

export default function* competitionSaga() {
  yield takeLatest(CompetitionTypes.COMPETITON_REQUEST, handleFetchCompetition);
}
