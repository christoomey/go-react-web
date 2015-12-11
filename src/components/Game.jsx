import React from 'react';

import Board from 'components/board';

const EMPTY = 'EMPTY';
const WHITE = 'WHITE';
const BLACK = 'BLACK';

const board = [
  [{ pending: false, stone: EMPTY}, { pending: false, stone: EMPTY}, { pending: false, stone: WHITE}, { pending: false, stone: EMPTY }],
  [{ pending: false, stone: WHITE}, { pending: false, stone: EMPTY}, { pending: false, stone: EMPTY}, { pending: false, stone: EMPTY }],
  [{ pending: false, stone: EMPTY}, { pending: false, stone: BLACK}, { pending: false, stone: BLACK}, { pending: false, stone: EMPTY }],
  [{ pending: false, stone: EMPTY}, { pending: true, stone: WHITE}, { pending: false, stone: EMPTY}, { pending: false, stone: EMPTY }]
];

const stonePlaced = (rowIndex) => {
  /* eslint-disable no-console */
  return (cellIndex) => console.log('stone placed', rowIndex, cellIndex);
};

export default React.createClass({
  propTypes: {
    params: React.PropTypes.shape({
      gameId: React.PropTypes.string,
      player: React.PropTypes.string
    })
  },

  render: function() {
    const { gameId, player } = this.props.params;

    return (
      <div>
        <p>Game #{gameId} - Player: {player}</p>
        <Board
          board={board}
          pending={false}
          stonePlaced={stonePlaced} />
      </div>
    );
  }
});
