import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from 'actions/app';

const NewGame = React.createClass({
  handleButtonClicked: function(event) {
    const { createGame } = this.props;

    createGame('White');
  },

  buildButton: function(player) {
    const { creatingGame } = this.props;

    return (
      <button onClick={this.handleButtonClicked} disabled={creatingGame} >
        {player}
      </button>
    );
  },

  render: function() {
    return (
      <div>
        <h2>Start a New Game</h2>

        {this.buildButton('White')}
        {this.buildButton('Black')}
      </div>
    )
  }
});

const mapStateToProps = (state) => ({
  creatingGame: state.app.creatingGame,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(actions, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(
  NewGame
);
