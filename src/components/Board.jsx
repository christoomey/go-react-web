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
    placeStone: React.PropTypes.func
  },

  render: function() {
    const { board, placeStone } = this.props;

    return (
      <div className='board'>
        {board.map((row, rowIndex) =>
          <Row
            key={rowIndex}
            stones={row}
            placeStone={(cellIndex) => placeStone(rowIndex, cellIndex)} />
        )}
      </div>
    );
  }
});

export default Board;
