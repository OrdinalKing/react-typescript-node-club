import { combineReducers } from 'redux';

import auth from './auth/reducer';
import competition from './competition/reducer';
import team from './team/reducer';

const rootReducer = combineReducers({
  auth,
  competition,
  team,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
