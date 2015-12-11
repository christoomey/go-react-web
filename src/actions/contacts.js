import { createConstants } from '../utils';
import { pushState } from 'redux-router';

const constants = createConstants(
  'FILTER_CONTACTS',
  'ADD_CONTACT'
);

const setFilter = (filter) => ({
  type: constants.FILTER_CONTACTS,
  payload: filter
});

const addContact = (contact) => ({
  type: constants.ADD_CONTACT,
  payload: contact
});

const actions = {
  setFilter,

  addContact: (contact) =>
    (dispatch, getState) => {
      dispatch(addContact(contact));

      const newContact = getState().contacts.slice(-1)[0];
      const newContactPath = `/contacts/${newContact.id}`;

      dispatch(pushState(null, newContactPath));
    }
};

export default {
  constants,
  actions
};
