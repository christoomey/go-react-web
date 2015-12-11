import React from 'react';
import { Link } from 'react-router';

import { BLACK, WHITE } from 'constants/stones';

const games = [
  { name: "Game 1", id: 1 },
  { name: "Game 2", id: 2 },
  { name: "Game 3", id: 3 },
  { name: "Game 4", id: 4 },
  { name: "Game 5", id: 5 }
];

const titleCased = (word) => {
  const [firstChar, ...rest] = word.split('');

  return `${firstChar}${rest.join('').toLowerCase()}`;
}

const GameList = React.createClass({
  playLink: function(gameId, stoneColor) {
    const gamePath = `/games/${gameId}/${stoneColor.toLowerCase()}`;

    return (
      <Link to={gamePath}>{titleCased(stoneColor)}</Link>
    )
  },

  render: function() {
    return (
      <div>
        <p>Active Games List</p>
        <ul>
          {games.map(game =>
            <li key={game.id}>
              {game.name} -
              {' '}
              {this.playLink(game.id, WHITE)}
              {' '}
              {this.playLink(game.id, BLACK)}
            </li>
          )}
        </ul>
        <Link to='/games/new'>New Game</Link>
      </div>
    );
  }
});

export default GameList;
