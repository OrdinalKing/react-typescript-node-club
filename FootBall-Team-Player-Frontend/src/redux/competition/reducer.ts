import { Competition } from 'src/models';
import { CompetitionActions as ActionType } from './actions';
import { CompetitionTypes, CompetitionState } from './types';

export const initialState: CompetitionState = {
  competitions: [],
  storedCompetitons: [],
  error: '',
};

const reducer = (
  state = initialState,
  action: ActionType
): CompetitionState => {
  const { type, payload } = action;

  switch (type) {
    case CompetitionTypes.COMPETITON_REQUEST_SUCCESS:
      return {
        ...state,
        competitions: payload as Competition[],
      };
    case CompetitionTypes.UPDATE_COMPETITION_SUCESS:
      return {
        ...state,
        storedCompetitons: payload as Competition[],
      };
    case CompetitionTypes.COMPETITON_REQUEST_ERROR:
    case CompetitionTypes.UPDATE_COMPETITION_ERROR:
      return {
        ...state,
        error: payload as string,
      };
    default:
      return state;
  }
};

export default reducer;
