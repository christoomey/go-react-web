import React from 'react';

export default React.createClass({
  handleButtonClicked: function(event) {
    console.log(event, 'hello');
  },

  render: function() {
    return (
      <div>
        <h2>Start a New Game</h2>

        <button onClick={this.handleButtonClicked}>
          White
        </button>

        <button onClick={this.handleButtonClicked}>
          Black
        </button>
      </div>
    )
  }
});
