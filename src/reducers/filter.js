import { constants } from 'actions/contacts';
import { createReducer } from 'utils';

const initialFilter = '';

export default createReducer(initialFilter, {
  [constants.FILTER_CONTACTS]: (state, filter) => filter
});
