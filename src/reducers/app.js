const initialGameState = {
  creatingGame: false,
  currentGame: {},
  games: []
}

const appReducer = (state = initialGameState, action) => {
  switch (action.type) {
    case 'CREATE_GAME':
      return {
        ...state,
        creatingGame: true
      }
    case 'GAME_CREATED':
      return {
        ...state,
        creatingGame: false
      }
    default:
      return state
  }
}

export default appReducer;
