import { createConstants } from '../utils';
import { pushState } from 'redux-router';

// const SERVER = 'http://5eb530ce.ngrok.com';
const SERVER = 'http://localhost:3000';

const constants = createConstants(
  'CREATE_GAME',
  'GAME_CREATED',
  'LOAD_GAME',
  'GAME_LOADED'
);

const gameCreated = () => ({
  type: constants.GAME_CREATED
})

const gameLoaded = (game) => ({
  type: constants.GAME_LOADED,
  payload: game
})

const loadGame = (gameId) => {
  return (dispatch) => {
    dispatch({ type: constants.LOAD_GAME });

    fetch(`${SERVER}/games/${gameId}`).then(resp => {
      resp.json().then(game => {
        if (resp.ok) {
          dispatch(gameLoaded(game));
        } else {
          console.log("game failed to load");
        }
      })
    });
  };
};

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
  loadGame
};

export default {
  constants,
  actions
};
