import React from 'react';

const Games = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Games</h2>
        {this.props.children}
      </div>
    );
  }
});

export default Games;
