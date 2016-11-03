import { combineReducers } from 'redux';
import { routeReducer as router } from 'redux-simple-router';

import someState from './someState';

const rootReducer = combineReducers({
  someState,
  router
});

export default rootReducer;
