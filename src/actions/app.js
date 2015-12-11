import { createConstants } from '../utils';
import { pushState } from 'redux-router';

const constants = createConstants(
  'CREATE_GAME',
);

const createGame = (player) => {
  console.log('creating game for ', player);

  return {
    type: constants.CREATE_GAME,
    payload: player
  }
};

const actions = {
  createGame,
};

export default {
  constants,
  actions
};
