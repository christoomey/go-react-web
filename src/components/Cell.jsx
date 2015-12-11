import React from 'react';

import Stone from 'components/stone';

const cellSize = 100;
const sizeStyle = `${cellSize}px`;

const cellStyles = {
  height: sizeStyle,
  width: sizeStyle
}

const Cell = React.createClass({
  propTypes: {
    onStonePlaced: React.PropTypes.func,
    stone: React.PropTypes.shape({
      pending: React.PropTypes.bool,
      stone: React.PropTypes.string
    })
  },

  render: function() {
    const { onStonePlaced } = this.props;
    const { stone, pending } = this.props.stone;
    const stoneSize = Math.round(cellSize / 2);

    return (
      <div className='cell' onClick={onStonePlaced} style={cellStyles}>
        <Stone size={stoneSize} stone={stone} pending={pending} />
      </div>
    );
  }
});

export default Cell;