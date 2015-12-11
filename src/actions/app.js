import { createConstants } from '../utils';
import { pushState } from 'redux-router';

// const SERVER = 'http://5eb530ce.ngrok.com';
const SERVER = 'http://localhost:3000';

const constants = createConstants(
  'CREATE_GAME',
  'GAME_CREATED'
);

const gameCreated = () => ({
  type: constants.GAME_CREATED
})

const createGame = (player) => {
  return (dispatch) => {
    dispatch({
      type: constants.CREATE_GAME,
      payload: player
    });

    fetch(`${SERVER}/games`, { method: 'POST' }).then(resp => {
      resp.json().then(newGame => {
        if (resp.ok) {
          dispatch(gameCreated());
          dispatch(pushState(null, `/games/${newGame.id}/${player}`));
        } else {
          console.error("GAME FAILED TO CREATE");
        };
      })
    });
  }
};

const actions = {
  createGame,
};

export default {
  constants,
  actions
};
