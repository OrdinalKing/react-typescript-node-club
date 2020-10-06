export enum CompetitionTypes {
  COMPETITON_REQUEST = 'COMPETITON_REQUEST',
  COMPETITON_REQUEST_SUCCESS = 'COMPETITON_REQUEST_SUCCESS',
  COMPETITON_REQUEST_ERROR = 'COMPETITON_REQUEST_ERROR',
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
  error: Maybe<string>;
}
