import { AuthActions as ActionType } from './actions';
import { AuthActionTypes, AuthState, User } from './types';

export const initialState: AuthState = {
  user: null,
  error: '',
};

const reducer = (state = initialState, action: ActionType): AuthState => {
  const { type, payload } = action;

  switch (type) {
    case AuthActionTypes.SIGNIN_REQUEST_SUCCESS:
    case AuthActionTypes.SIGNUP_REQUEST_SUCESS:
    case AuthActionTypes.UPDATE_PROFILE_SUCESS:
      return {
        ...state,
        user: payload as User,
      };

    case AuthActionTypes.SIGNOUT_REQUEST_SUCCESS:
      return { ...initialState };

    case AuthActionTypes.SIGNIN_REQUEST_ERROR:
    case AuthActionTypes.SIGNUP_REQUEST_ERROR:
    case AuthActionTypes.SIGNOUT_REQUEST_ERROR:
    case AuthActionTypes.UPDATE_PROFILE_ERROR:
      return {
        ...state,
        error: payload as string,
      };

    default:
      return state;
  }
};

export default reducer;
