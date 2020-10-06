import { CompetitionActions as ActionType } from './actions';
import { CompetitionTypes, CompetitionState, Competition } from './types';

export const initialState: CompetitionState = {
  competitions: [],
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
        competitions: [...(payload as Competition[])],
      };
    case CompetitionTypes.COMPETITON_REQUEST_ERROR:
      return {
        ...state,
        error: payload as string,
      };
    default:
      return state;
  }
};

export default reducer;
