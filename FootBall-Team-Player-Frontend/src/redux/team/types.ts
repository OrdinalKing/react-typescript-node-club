import { Team } from 'src/models';

export enum TeamTypes {
  GET_TEAMS_REQUEST = 'GET_TEAMS_REQUEST',
  GET_TEAMS_SUCCESS = 'GET_TEAMS_SUCCESS',
  GET_TEAMS_ERROR = 'GET_TEAMS_ERROR',
}

export interface TeamState {
  teams: Team[];
  error: string | null | undefined;
}
