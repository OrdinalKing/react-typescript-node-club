import { User } from 'src/models';
import { AuthActions as ActionType } from './actions';
import { AuthActionTypes, AuthState } from './types';

export const initialState: AuthState = {
  user: null,
  error: '',
  loading: false,
};

const reducer = (state = initialState, action: ActionType): AuthState => {
  const { type, payload } = action;

  switch (type) {
    case AuthActionTypes.SIGNIN_REQUEST:
    case AuthActionTypes.SIGNUP_REQUEST:
    case AuthActionTypes.UPDATE_PROFILE:
      return {
        ...state,
        loading: true,
      };

    case AuthActionTypes.SIGNIN_REQUEST_SUCCESS:
    case AuthActionTypes.SIGNUP_REQUEST_SUCESS:
    case AuthActionTypes.UPDATE_PROFILE_SUCESS:
      return {
        ...state,
        user: payload as User,
        loading: false,
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
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
