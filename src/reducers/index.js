import { combineReducers }    from 'redux';
import { routerStateReducer } from 'redux-router';

import appReducer from 'reducers/app';

export default combineReducers({
  app: appReducer,
  router: routerStateReducer
});
