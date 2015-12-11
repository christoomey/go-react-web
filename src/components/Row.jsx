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
    placeStone: React.PropTypes.func
  },

  render: function() {
    const { stones, placeStone } = this.props;

    return (
      <div className='row'>
        {stones.map((stone, cellIndex) =>
          <Cell
            key={cellIndex}
            stone={stone}
            placeStone={() => placeStone(cellIndex)} />
        )}
      </div>
    );
  }
});

export default Row;
