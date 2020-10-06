import { CompetitionTypes, Competition } from './types';

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

export const updateCompetition = (payload: number[]) => ({
  type: CompetitionTypes.UPDATE_COMPETITION_REQUEST,
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
  | ReturnType<typeof fetchCompetition>
  | ReturnType<typeof fetchCompetitionSuccess>
  | ReturnType<typeof fetchCompetitionError>
  | ReturnType<typeof updateCompetition>
  | ReturnType<typeof updateCompetitonSuccess>
  | ReturnType<typeof updateCompetitionError>;
