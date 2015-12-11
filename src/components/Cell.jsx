import React from 'react';

import Stone from 'components/stone';

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

    return (
      <div className='cell' onClick={onStonePlaced} >
        <Stone stone={stone} pending={pending} />
      </div>
    );
  }
});

export default Cell;
