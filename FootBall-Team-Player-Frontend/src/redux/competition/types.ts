export enum CompetitionTypes {
  COMPETITON_REQUEST = 'COMPETITON_REQUEST',
  COMPETITON_REQUEST_SUCCESS = 'COMPETITON_REQUEST_SUCCESS',
  COMPETITON_REQUEST_ERROR = 'COMPETITON_REQUEST_ERROR',
  UPDATE_COMPETITION_REQUEST = 'UPDATE_COMPETITION_REQUEST',
  UPDATE_COMPETITION_SUCESS = 'UPDATE_COMPETITION_SUCCESS',
  UPDATE_COMPETITION_ERROR = 'UPDATE_COMPETITION_ERROR',
}

export type Maybe<T> = T | undefined | null;

export interface Competition {
  id: number;
  name: string;
  startDate?: Date;
  endDate?: Date;
}

export interface CompetitionState {
  competitions: Competition[];
  storedCompetitons: Competition[];
  error: Maybe<string>;
}
