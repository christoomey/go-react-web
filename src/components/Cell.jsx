import React from 'react';

import Stone from 'components/stone';

const cellSize = 30;
const sizeStyle = `${cellSize}px`;

const cellStyles = {
  height: sizeStyle,
  width: sizeStyle
}

const Cell = React.createClass({
  propTypes: {
    placeStone: React.PropTypes.func,
    stone: React.PropTypes.shape({
      pending: React.PropTypes.bool,
      stone: React.PropTypes.string
    })
  },

  render: function() {
    const { placeStone } = this.props;
    const { stone, pending } = this.props.stone;
    const stoneSize = Math.round(cellSize / 2);

    return (
      <div className='cell' onClick={placeStone} style={cellStyles}>
        <Stone size={stoneSize} stone={stone} pending={pending} />
      </div>
    );
  }
});

export default Cell;
