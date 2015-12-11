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
    stonePlaced: React.PropTypes.func
  },

  render: function() {
    const { board, stonePlaced } = this.props;

    return (
      <div className='board'>
        {board.map((row, rowIndex) =>
          <Row
            key={rowIndex}
            stones={row}
            onStonePlaced={stonePlaced(rowIndex)} />
        )}
      </div>
    );
  }
});

export default Board;
