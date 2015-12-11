import { combineReducers }    from 'redux';
import { routerStateReducer } from 'redux-router';
import contacts from './contacts';
import filter from './filter';

export default combineReducers({
  contacts,
  filter,
  router: routerStateReducer
});
