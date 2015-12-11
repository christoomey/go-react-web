import { constants } from 'actions/app';
import { WHITE, BLACK, EMPTY } from 'constants/stones';

const board = [
  [{ pending: false, stone: EMPTY}, { pending: false, stone: EMPTY}, { pending: false, stone: WHITE}, { pending: false, stone: EMPTY }],
  [{ pending: false, stone: WHITE}, { pending: false, stone: EMPTY}, { pending: false, stone: EMPTY}, { pending: false, stone: EMPTY }],
  [{ pending: false, stone: EMPTY}, { pending: false, stone: BLACK}, { pending: false, stone: BLACK}, { pending: false, stone: EMPTY }],
  [{ pending: false, stone: EMPTY}, { pending: true, stone: WHITE}, { pending: false, stone: EMPTY}, { pending: false, stone: EMPTY }]
];

const initialGameState = {
  creatingGame: false,
  loadingGame: true,
  currentGame: {
    board: board
  },
  games: []
}

const nonPendingBoard = (board) => {
  return board.map(row => {
      return row.map(stone => {
        return { pending: false, stone: stone }
      });
  });
}

const appReducer = (state = initialGameState, action) => {
  const { CREATE_GAME, GAME_CREATED, LOAD_GAME, GAME_LOADED } = constants;

  switch (action.type) {
    case CREATE_GAME:
      return {
        ...state,
        creatingGame: true
      }

    case GAME_CREATED:
      return {
        ...state,
        creatingGame: false
      }

    case LOAD_GAME:
      return {
        ...state,
        loadingGame: true
      }

    case GAME_LOADED:
      const { game } = action.payload;
      const board = nonPendingBoard(game.board);

      return {
        ...state,
        loadingGame: false,
        currentGame: {
          ...game,
          board
        }
      }

    default:
      return state
  }
}

export default appReducer;
