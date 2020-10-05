import { combineReducers } from 'redux';

import auth from './auth/reducer';
import competition from './competition/reducer';

const rootReducer = combineReducers({
  auth,
  competition,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
