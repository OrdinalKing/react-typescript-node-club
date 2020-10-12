import { Team } from 'src/models';
import { TeamTypes } from './types';

export const fetchTeam = (payload: string) => ({
  type: TeamTypes.TEAM_REQUEST,
  payload,
});

export const fetchTeamSuccess = (payload: Team[]) => ({
  type: TeamTypes.TEAM_REQUEST_SUCCESS,
  payload,
});

export const fetchTeamError = (payload: string) => ({
  type: TeamTypes.TEAM_REQUEST_ERROR,
  payload,
});

export type TeamActions =
  | ReturnType<typeof fetchTeam>
  | ReturnType<typeof fetchTeamSuccess>
  | ReturnType<typeof fetchTeamError>;
