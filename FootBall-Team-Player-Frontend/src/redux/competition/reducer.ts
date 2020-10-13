import { Competition } from 'src/models';
import { CompetitionActions as ActionType } from './actions';
import { CompetitionTypes, CompetitionState } from './types';

export const initialState: CompetitionState = {
  competitions: [],
  storedCompetitons: [],
  error: '',
  loading: false,
};

const reducer = (
  state = initialState,
  action: ActionType
): CompetitionState => {
  const { type, payload } = action;

  switch (type) {
    case CompetitionTypes.FETCH_COMPETITONS_REQUEST:
    case CompetitionTypes.GET_COMPETITIONS_REQUEST:
    case CompetitionTypes.UPDATE_COMPETITION_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CompetitionTypes.FETCH_COMPETITONS_SUCCESS:
      return {
        ...state,
        competitions: payload as Competition[],
        loading: false,
      };
    case CompetitionTypes.GET_COMPETITIONS_SUCCESS:
      return {
        ...state,
        storedCompetitons: payload as Competition[],
        loading: false,
      };
    case CompetitionTypes.UPDATE_COMPETITION_SUCESS:
      return {
        ...state,
        storedCompetitons: payload as Competition[],
        loading: false,
      };
    case CompetitionTypes.FETCH_COMPETITONS_ERROR:
    case CompetitionTypes.GET_COMPETITIONS_ERROR:
    case CompetitionTypes.UPDATE_COMPETITION_ERROR:
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
