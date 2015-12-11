import React from 'react';

import Cell from 'components/cell';

const Row = React.createClass({
  propTypes: {
    stones: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        pending: React.PropTypes.bool,
        stone: React.PropTypes.string
      })
    ),
    onStonePlaced: React.PropTypes.func
  },

  render: function() {
    const { stones, onStonePlaced } = this.props;

    return (
      <div className='row'>
        {stones.map((stone, cellIndex) =>
          <Cell
            key={cellIndex}
            stone={stone}
            onStonePlaced={onStonePlaced(cellIndex)} />
        )}
      </div>
    );
  }
});

export default Row;
