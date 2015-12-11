import { constants } from 'actions/app';
import { WHITE, BLACK, EMPTY } from 'constants/stones';

const {
  CREATE_GAME,
  GAME_CREATED,
  LOAD_GAME,
  GAME_LOADED,
  PLACE_STONE,
  GAME_UPDATED
} = constants;

const initialGameState = {
  creatingGame: false,
  loadingGame: true,
  currentGame: {
    board: [[]],
    playingAs: EMPTY,
    currentPlayer: EMPTY
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
        loadingGame: true,
        currentGame: {
          ...state.currentGame,
          playingAs: action.payload.playingAs
        }
      }

    case GAME_LOADED:
      const { game } = action.payload;
      const board = nonPendingBoard(game.board);
      return {
        ...state,
        loadingGame: false,
        currentGame: {
          ...game,
          board,
          playingAs: state.currentGame.playingAs
        }
      }

    case PLACE_STONE:
      const { rowIndex, cellIndex } = action.payload;
      const currentBoard  = state.currentGame.board;
      const optimisticBoard = optimisticallyPlace(
        currentBoard,
        state.currentGame.playingAs,
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

    case GAME_UPDATED:
      const { updatedGame } = action.payload;
      const updatedBoard = nonPendingBoard(updatedGame.board);
      return {
        ...state,
        currentGame: {
          ...state.currentGame,
          ...updatedGame,
          board: updatedBoard
        }
      }

    default:
      return state
  }
}

export default appReducer;
