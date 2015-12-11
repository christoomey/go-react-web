import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from 'actions/app';

import Board from 'components/board';

const Game = React.createClass({
  propTypes: {
    params: React.PropTypes.shape({
      gameId: React.PropTypes.string,
      player: React.PropTypes.string
    })
  },

  componentDidMount: function() {
    const { gameId, playingAs } = this.props.params;
    const { loadGame, startPolling } = this.props;

    loadGame(gameId, playingAs);
    startPolling(gameId);
  },

  boardOrLoading: function() {
    const { gameId } = this.props.params;
    const { loadingGame, currentGame, placeStone } = this.props;
    const placeForCurrentGame = (rowIndex, cellIndex) => {
      placeStone(gameId, currentGame.playingAs, rowIndex, cellIndex)
    }

    if (loadingGame) {
      return <p>Loading</p>
    } else {
      return (
        <Board
          board={currentGame.board}
          placeStone={placeForCurrentGame} />
      )
    }
  },

  render: function() {
    const { gameId } = this.props.params;
    const { loadingGame, currentGame } = this.props;

    return (
      <div>
        <p>Game #{gameId} - Playing as: <strong>{currentGame.playingAs}</strong></p>
        <p><strong>{currentGame.currentPlayer}</strong> to move next</p>
        {this.boardOrLoading()}
      </div>
    );
  }
});

const mapStateToProps = (state) => ({
  currentGame: state.app.currentGame,
  loadingGame: state.app.loadingGame
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(actions, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(
  Game
);
