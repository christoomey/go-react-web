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
    const { gameId, player } = this.props.params;
    const { loadGame } = this.props;

    loadGame(gameId, player);
  },

  boardOrLoading: function() {
    const { loadingGame, currentGame, placeStone } = this.props;

    if (loadingGame) {
      return <p>Loading</p>
    } else {
      return (
        <Board
          board={currentGame.board}
          placeStone={placeStone} />
      )
    }
  },

  render: function() {
    const { gameId } = this.props.params;
    const { loadingGame, currentGame } = this.props;

    return (
      <div>
        <p>Game #{gameId} - Playing as: <strong>{currentGame.player}</strong></p>
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
