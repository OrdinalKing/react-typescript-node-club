import { SnackbarActions as ActionType } from './actions';
import { SnackbarTypes, SnackbarState } from './types';

export const initialState: SnackbarState = {
  message: '',
  severity: 'success',
};

const reducer = (state = initialState, action: ActionType): SnackbarState => {
  const { type, payload } = action;

  switch (type) {
    case SnackbarTypes.SET_SUCCESS_NOTIFICATION:
      return {
        message: payload,
        severity: 'success',
      };

    case SnackbarTypes.SET_ERROR_NOTIFICATION:
      return {
        message: payload,
        severity: 'error',
      };

    case SnackbarTypes.CLEAR_NOTIFICATION:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default reducer;
