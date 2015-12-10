const WHITE = 'WHITE';
const BLACK = 'BLACK';
const EMPTY = 'EMPTY';

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
  board: initialBoard,
}

const nextState = (game, action) => {
  if (action.type === "StonePlaced") {
    game.board[action.rowIndex][action.cellIndex] = game.player;
  }
  return game;
}

var Board = React.createClass({
  getInitialState: function() {
    return this.props.game;
  },
  stonePlaced: function(rowIndex) {
    return (cellIndex) => {
      return () => {
        this.setState(nextState(game, { type: "StonePlaced", rowIndex: rowIndex, cellIndex: cellIndex }))
      };
    };
  },
  render: function() {
    return (
      <div className="board">
        {initialBoard.map((row, rowIndex) =>
          <Row key={rowIndex} stones={row} onStonePlaced={this.stonePlaced(rowIndex)} />
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
  <Board game={game} />,
  document.getElementById('container')
);

// set nocindent
// setl autoindent
// setl indentexpr=''
