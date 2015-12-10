const WHITE = 'WHITE';
const BLACK = 'BLACK';
const EMPTY = 'EMPTY';

const STONE_PLACED = 'STONE_PLACED';

let initialBoard = [
  [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
];

let game = {
  player: BLACK,
  currentPlayer: BLACK,
  board: initialBoard,
}

const nextState = (game, action) => {
  if (action.type === STONE_PLACED) {
    if (game.player === game.currentPlayer) {
      game.board[action.rowIndex][action.cellIndex] = game.player;
      game.currentPlayer = (game.currentPlayer === WHITE) ? BLACK : WHITE;
    }
  }
  return game;
}

var App = React.createClass({
  getInitialState: function() {
    return this.props.game;
  },
  stonePlaced: function(rowIndex) {
    return (cellIndex) => {
      return () => {
        this.setState(nextState(game, { type: STONE_PLACED, rowIndex: rowIndex, cellIndex: cellIndex }))
      };
    };
  },
  render: function() {
    return (
      <div className="app">
        <p>Current Player is {this.state.currentPlayer}</p>
        <Board stonePlaced={this.stonePlaced} board={this.state.board} />
      </div>
    )
  }
});

var Board = React.createClass({
  render: function() {
    return (
      <div className="board">
        {this.props.board.map((row, rowIndex) =>
          <Row key={rowIndex} stones={row} onStonePlaced={this.props.stonePlaced(rowIndex)} />
        )}
      </div>
    );
  }
});

var Row = React.createClass({
  render: function() {
    return (
      <div className="row">
        {this.props.stones.map((stone, cellIndex) =>
          <Cell key={cellIndex} stone={stone} onStonePlaced={this.props.onStonePlaced(cellIndex)} />
        )}
      </div>
    )
  }
});

var Cell = React.createClass({
  render: function() {
    return (
      <div className="cell" onClick={this.props.onStonePlaced} >
        <Stone type={this.props.stone} />
      </div>
    )
  }
});

var Stone = React.createClass({
  render: function() {
    return <div className={`stone ${this.props.type.toLowerCase()}`}></div>
  }
});

ReactDOM.render(
  <App game={game} />,
  document.getElementById('container')
);

// set nocindent
// setl autoindent
// setl indentexpr=''
