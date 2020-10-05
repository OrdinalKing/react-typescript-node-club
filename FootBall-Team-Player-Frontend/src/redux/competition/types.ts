export enum CompetitionTypes {
  COMPETITON_REQUEST = 'COMPETITON_REQUEST',
  COMPETITON_REQUEST_SUCCESS = 'COMPETITON_REQUEST_SUCCESS',
  COMPETITON_REQUEST_ERROR = 'COMPETITON_REQUEST_ERROR',
}

export interface Competition {
  id: number;
  area: {
    id: number;
    name: string;
    countryCode: string;
    ensignUrl: string | null;
  };
  name: string;
  code: string | null;
  embleUrl: string | null;
  plan: string | null;
  currentSeason: {
    id: number;
    startDate: Date;
    endDate: Date;
    currentMatchday: number | null;
    winner: string | null;
  };
  numberOfAvailableSeasons: number;
  lastUpdated: Date;
}

export type Maybe<T> = T | undefined | null;

export interface CompetitionState {
  competitions: Competition[];
  error: Maybe<string>;
}
