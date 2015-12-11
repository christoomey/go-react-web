import React from 'react';

const Stone = React.createClass({
  propTypes: {
    pending: React.PropTypes.bool,
    stone: React.PropTypes.string
  },

  render: function() {
    const { pending, stone } = this.props;

    return (
      <div
        className={`stone ${stone.toLowerCase()} ${pending ? 'pending' : ''}`}>
      </div>
    );
  }
});

export default Stone;
