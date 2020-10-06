import { CompetitionTypes } from './types';

export const fetchCompetition = () => ({
  type: CompetitionTypes.COMPETITON_REQUEST,
  payload: '',
});

export const fetchCompetitionSuccess = (payload: Array<any>) => ({
  type: CompetitionTypes.COMPETITON_REQUEST_SUCCESS,
  payload,
});

export const fetchCompetitionError = (payload: string) => ({
  type: CompetitionTypes.COMPETITON_REQUEST_ERROR,
  payload,
});

export type CompetitionActions =
  | ReturnType<typeof fetchCompetition>
  | ReturnType<typeof fetchCompetitionSuccess>
  | ReturnType<typeof fetchCompetitionError>;
