import React from 'react';

import Row from 'components/row';

const Board = React.createClass({
  propTypes: {
    board: React.PropTypes.arrayOf(
      React.PropTypes.arrayOf(
        React.PropTypes.shape({
          pending: React.PropTypes.bool,
          stone: React.PropTypes.string
        })
      )
    ),
    pending: React.PropTypes.bool,
    stonePlaced: React.PropTypes.func
  },

  boardOrPending: function() {
    const { pending, board, stonePlaced } = this.props;

    if (pending) {
      return <p>Waiting for game data</p>;
    } else {
      return (
        board.map((row, rowIndex) =>
          <Row
            key={rowIndex}
            stones={row}
            onStonePlaced={stonePlaced(rowIndex)} />
        )
      );
    }
  },

  render: function() {
    return (
      <div className='board'>
        {this.boardOrPending()}
      </div>
    );
  }
});

export default Board;
