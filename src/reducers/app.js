const initialGameState = {
  creatingGame: false,
  currentGame: {},
  games: []
}

const appReducer = (state = initialGameState, action) => {
  if (action.type === 'CREATE_GAME') {
    return {
      ...state,
      creatingGame: true
    }
  } else {
    return state;
  }
}

export default appReducer;
