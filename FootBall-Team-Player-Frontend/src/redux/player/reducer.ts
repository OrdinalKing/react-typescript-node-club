import { Player } from 'src/models';
import { PlayerActions as ActionType } from './actions';
import { PlayerTypes, PlayerState } from './types';

export const initialState: PlayerState = {
  players: [],
  error: '',
  loading: false,
};

const reducer = (state = initialState, action: ActionType): PlayerState => {
  const { type, payload } = action;

  switch (type) {
    case PlayerTypes.GET_PLAYERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case PlayerTypes.GET_PLAYERS_SUCCESS:
      return {
        ...state,
        players: payload as Player[],
        loading: false,
      };

    case PlayerTypes.GET_PLAYERS_ERROR:
      return {
        ...state,
        error: payload as string,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
