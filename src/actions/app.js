import { createConstants } from '../utils';
import { pushState } from 'redux-router';

// const SERVER = 'http://5eb530ce.ngrok.com';
const SERVER = 'http://localhost:3000';

const POLLING_INTERVAL = 1000;

const constants = createConstants(
  'CREATE_GAME',
  'GAME_CREATED',
  'LOAD_GAME',
  'GAME_LOADED',
  'PLACE_STONE',
  'GAME_UPDATED',
  'START_POLLING',
);

const gameCreated = () => ({
  type: constants.GAME_CREATED
})

const gameLoaded = (game) => ({
  type: constants.GAME_LOADED,
  payload: game
})

const pollForGame = (gameId, dispatch) => {
  fetch(`${SERVER}/games/${gameId}`).then(resp =>
    resp.json().then(game => {
      dispatch({
        type: constants.GAME_UPDATED,
        payload: {
          updatedGame: game.game
        }
      })
    })
  )
}

const startPolling = (gameId) => (
  (dispatch) => {
    let pollingId = setInterval(() => pollForGame(gameId, dispatch), POLLING_INTERVAL);
    dispatch({
      type: constants.START_POLLING,
      payload: { pollingId }
    })
  }
)

const placeStone = (gameId, player, rowIndex, cellIndex) => {
  return (dispatch) => {
    dispatch({
      type: constants.PLACE_STONE,
      payload: { rowIndex, cellIndex }
    });

    const action = { type: 'STONE_PLACED', rowIndex, cellIndex, player: player.toUpperCase() };
    const endpoint = `${SERVER}/games/${gameId}/actions`;
    console.log(action, endpoint);

    fetch(endpoint, { method: 'POST', body: JSON.stringify(action) }).
      then(resp => {
        resp.json().then(game => {
          dispatch({
            type: constants.GAME_UPDATED,
            payload: {
              updatedGame: game.game
            }
          })
        })
      })
  }
}

const loadGame = (gameId, playingAs) => {
  return (dispatch) => {
    dispatch({
      type: constants.LOAD_GAME,
      payload: { playingAs }
    });

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

const createGame = (playingAs) => {
  return (dispatch) => {
    dispatch({ type: constants.CREATE_GAME });

    fetch(`${SERVER}/games`, { method: 'POST' }).then(resp => {
      resp.json().then(newGame => {
        if (resp.ok) {
          dispatch(gameCreated());
          dispatch(pushState(null, `/games/${newGame.id}/${playingAs}`));
        } else {
          console.error("GAME FAILED TO CREATE");
        };
      })
    });
  }
};

const actions = {
  createGame,
  loadGame,
  placeStone,
  startPolling,
};

export default {
  constants,
  actions
};
