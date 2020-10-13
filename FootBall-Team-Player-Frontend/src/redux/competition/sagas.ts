import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { getParams, URL, getFootballParams } from 'src/utils/api';
import { Competition } from 'src/models';
import {
  CompetitionActions as ActionType,
  fetchCompetitionsSuccess,
  fetchCompetitionsError,
  updateCompetitonSuccess,
  updateCompetitionError,
  getCompetitionError,
  getCompetitionsSuccess,
} from './actions';
import { CompetitionTypes } from './types';

function* handleFetchCompetitions() {
  try {
    const { data } = yield call(axios.request, getFootballParams());
    const competitions: Competition[] = [];
    data.competitions.forEach((competition: any) => {
      if (
        competition &&
        competition.code &&
        competition.currentSeason &&
        competition.currentSeason.startDate &&
        competition.currentSeason.endDate
      ) {
        competitions.push({
          id: competition.id,
          name: competition.name,
          code: competition.code,
          startDate: competition.currentSeason.startDate,
          endDate: competition.currentSeason.endDate,
        });
      }
    });
    yield put(fetchCompetitionsSuccess(competitions as Competition[]));
  } catch (err) {
    yield put(fetchCompetitionsError(err));
  }
}

function* handleGetCompetitions() {
  try {
    const { data } = yield call(
      axios.request,
      getParams(URL.GET_COMPETITIONS, 'GET')
    );
    yield put(getCompetitionsSuccess(data));
  } catch (err) {
    yield put(getCompetitionError(err));
  }
}

function* handleUpdateCompetition({ payload }: ActionType) {
  try {
    const { data } = yield call(
      axios.request,
      getParams(URL.UPDATE_COMPETITION, 'POST', { ...(payload as Competition) })
    );
    yield put(updateCompetitonSuccess(data));
  } catch (err) {
    yield put(updateCompetitionError(err));
  }
}

export default function* competitionSaga() {
  yield takeLatest(
    CompetitionTypes.FETCH_COMPETITONS_REQUEST,
    handleFetchCompetitions
  );
  yield takeLatest(
    CompetitionTypes.GET_COMPETITIONS_REQUEST,
    handleGetCompetitions
  );
  yield takeLatest(
    CompetitionTypes.UPDATE_COMPETITION_REQUEST,
    handleUpdateCompetition
  );
}
