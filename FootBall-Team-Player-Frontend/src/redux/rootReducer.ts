import { combineReducers } from 'redux';

import auth from './auth/reducer';
import competition from './competition/reducer';
import team from './team/reducer';
import player from './player/reducer';

const rootReducer = combineReducers({
  auth,
  competition,
  team,
  player,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
