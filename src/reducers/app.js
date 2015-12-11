const initialGameState = {
  creatingGame: false,
  currentGame: {},
  games: []
}

const appReducer = (state = initialGameState, action) => {
  if (action.type === 'CREATE_GAME') {
    console.log('would create game');
    return state;
  } else {
    return state;
  }
}
