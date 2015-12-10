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

// let game = {
//   player: BLACK,
//   currentPlayer: BLACK,
//   board: initialBoard,
// }

const buildGame = (remoteGameState) => {
  return { player: BLACK, ...remoteGameState };
}

const initialGame = buildGame({
  currentPlayer: BLACK,
  board: initialBoard
});

var App = React.createClass({
  getInitialState: function() {
    return this.props.game;
  },
  stonePlaced: function(rowIndex) {
    return (cellIndex) => {
      return () => {
        const actionsEndpoint = "http://5eb530ce.ngrok.com/games/123/actions";
        const action = { type: STONE_PLACED, rowIndex: rowIndex, cellIndex: cellIndex };

        let gameResponded = fetch(
          actionsEndpoint,
          { method: "POST", body: JSON.stringify(action) }
        );

        gameResponded.then(resp => resp.json()).then(response => {
          var nextGame = buildGame(response.game);
          this.setState(nextGame);
        })
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
  <App game={initialGame} />,
  document.getElementById('container')
);

// set nocindent
// setl autoindent
// setl indentexpr=''
