import { constants } from 'actions/app';
import { WHITE, BLACK, EMPTY } from 'constants/stones';

const {
  CREATE_GAME,
  GAME_CREATED,
  LOAD_GAME,
  GAME_LOADED,
  PLACE_STONE
} = constants;

const initialGameState = {
  creatingGame: false,
  loadingGame: true,
  currentGame: {
    board: [[]]
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

const optimisticallyPlace = (board, player, rowIndex, cellIndex) => {
  const boardCopy = JSON.parse(JSON.stringify(board));
  boardCopy[rowIndex][cellIndex] = { pending: true, stone: player };

  return boardCopy;
};

const appReducer = (state = initialGameState, action) => {
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

    case PLACE_STONE:
      const { rowIndex, cellIndex } = action.payload;
      const currentBoard  = state.currentGame.board;
      const player = 'BLACK';
      const optimisticBoard = optimisticallyPlace(
        currentBoard,
        player,
        rowIndex,
        cellIndex
      );
      return {
        ...state,
        currentGame: {
          ...state.currentGame,
          board: optimisticBoard
        }
      }

    default:
      return state
  }
}

export default appReducer;
