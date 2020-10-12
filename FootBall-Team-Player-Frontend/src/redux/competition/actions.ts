import { Competition } from 'src/models';
import { CompetitionTypes } from './types';

export const fetchCompetitions = () => ({
  type: CompetitionTypes.FETCH_COMPETITONS_REQUEST,
  payload: '',
});

export const fetchCompetitionsSuccess = (payload: Array<Competition>) => ({
  type: CompetitionTypes.FETCH_COMPETITONS_SUCCESS,
  payload,
});

export const fetchCompetitionsError = (payload: string) => ({
  type: CompetitionTypes.FETCH_COMPETITONS_ERROR,
  payload,
});

export const updateCompetition = (payload: Competition) => ({
  type: CompetitionTypes.UPDATE_COMPETITION_REQUEST,
  payload,
});

export const getCompetitions = () => ({
  type: CompetitionTypes.GET_COMPETITIONS_REQUEST,
  payload: '',
});

export const getCompetitionsSuccess = (payload: Competition[]) => ({
  type: CompetitionTypes.GET_COMPETITIONS_SUCCESS,
  payload,
});

export const getCompetitionError = (payload: string) => ({
  type: CompetitionTypes.GET_COMPETITIONS_ERROR,
  payload,
});

export const updateCompetitonSuccess = (payload: Competition[]) => ({
  type: CompetitionTypes.UPDATE_COMPETITION_SUCESS,
  payload,
});

export const updateCompetitionError = (payload: string) => ({
  type: CompetitionTypes.UPDATE_COMPETITION_ERROR,
  payload,
});

export type CompetitionActions =
  | ReturnType<typeof fetchCompetitions>
  | ReturnType<typeof fetchCompetitionsSuccess>
  | ReturnType<typeof fetchCompetitionsError>
  | ReturnType<typeof getCompetitions>
  | ReturnType<typeof getCompetitionsSuccess>
  | ReturnType<typeof getCompetitionError>
  | ReturnType<typeof updateCompetition>
  | ReturnType<typeof updateCompetitonSuccess>
  | ReturnType<typeof updateCompetitionError>;
