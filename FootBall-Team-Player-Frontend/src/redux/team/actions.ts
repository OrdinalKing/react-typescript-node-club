import { Team } from 'src/models';
import { TeamTypes } from './types';

export const getTeams = (payload: any) => ({
  type: TeamTypes.GET_TEAMS_REQUEST,
  payload,
});

export const getTeamsSuccess = (payload: Team[]) => ({
  type: TeamTypes.GET_TEAMS_SUCCESS,
  payload,
});

export const getTeamsError = (payload: string) => ({
  type: TeamTypes.GET_TEAMS_ERROR,
  payload,
});

export type TeamActions =
  | ReturnType<typeof getTeams>
  | ReturnType<typeof getTeamsSuccess>
  | ReturnType<typeof getTeamsError>;
