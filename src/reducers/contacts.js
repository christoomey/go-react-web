import { createReducer } from 'utils';
import { constants } from 'actions/contacts';

let contactId = 1;

const buildContact = (name) => ({
  name: name,
  id: contactId++
});

const initialContacts = [
  'Michael Scott',
  'Jim Halpert',
  'Pam Beasly',
  'Dwight Schrutt'
].map(name => buildContact(name));

export default createReducer(initialContacts, {
  [constants.ADD_CONTACT]: (state, contact) =>
    [...state, buildContact(contact)]
});
