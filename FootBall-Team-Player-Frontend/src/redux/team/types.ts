import { Team } from 'src/models';

export enum TeamTypes {
  TEAM_REQUEST = 'TEAM_REQUEST',
  TEAM_REQUEST_SUCCESS = 'TEAM_REQUEST_SUCCESS',
  TEAM_REQUEST_ERROR = 'TEAM_REQUEST_ERROR',
}

export interface TeamState {
  teams: Team[];
  error: string | null | undefined;
}
