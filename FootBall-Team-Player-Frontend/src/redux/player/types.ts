import { Player } from 'src/models';

export enum PlayerTypes {
  GET_PLAYERS_REQUEST = 'GET_PLAYERS_REQUEST',
  GET_PLAYERS_SUCCESS = 'GET_PLAYERS_SUCCESS',
  GET_PLAYERS_ERROR = 'GET_PLAYERS_ERROR',
}

export interface PlayerState {
  players: Player[];
  error: string | null | undefined;
}
