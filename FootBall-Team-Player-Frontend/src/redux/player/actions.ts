import { Player } from 'src/models';
import { PlayerTypes } from './types';

export const getPlayers = (payload: any) => ({
  type: PlayerTypes.GET_PLAYERS_REQUEST,
  payload,
});

export const getPlayersSuccess = (payload: Player[]) => ({
  type: PlayerTypes.GET_PLAYERS_SUCCESS,
  payload,
});

export const getPlayersError = (payload: string) => ({
  type: PlayerTypes.GET_PLAYERS_ERROR,
  payload,
});

export type PlayerActions =
  | ReturnType<typeof getPlayers>
  | ReturnType<typeof getPlayersSuccess>
  | ReturnType<typeof getPlayersError>;
