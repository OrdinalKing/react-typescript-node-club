export enum TeamTypes {
  TEAM_REQUEST = 'TEAM_REQUEST',
  TEAM_REQUEST_SUCCESS = 'TEAM_REQUEST_SUCCESS',
  TEAM_REQUEST_ERROR = 'TEAM_REQUEST_ERROR',
}

export interface Team {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  country: string;
  email: string;
  website: string;
  phone: string;
  address: string;
  logo: string;
  founded: Date;
}

export interface TeamState {
  teams: Team[];
  error: string | null | undefined;
}
