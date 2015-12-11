const { Router, Route, IndexRoute, Link } = ReactRouter;

const WHITE = 'WHITE';
const BLACK = 'BLACK';
const EMPTY = 'EMPTY';

const STONE_PLACED = 'STONE_PLACED';

const SERVER = "http://5eb530ce.ngrok.com"
const gameId = 5;

const nonPendingBoard = (board) => {
  return board.map(row => {
      return row.map(stone => {
        return { pending: false, stone: stone }
      });
  });
}

const buildGame = ({ currentPlayer, board }, pending = false) => {
  return {
    pending: pending,
    player: BLACK,
    currentPlayer: currentPlayer,
    board: nonPendingBoard(board),
  };
}

const optimisticallyPlace = (game, { rowIndex, cellIndex }) => {
  if (game.player === game.currentPlayer) {
    game.board[rowIndex][cellIndex] = { pending: true, stone: game.player };
    game.currentPlayer = (game.currentPlayer === WHITE) ? BLACK : WHITE;
  }
  return game.board;
};

var Game = React.createClass({
  getInitialState: function() {
    console.log("helo");
    const { gameId } = this.props;
    let gameResponded = fetch(`${SERVER}/games/${gameId}`)
    gameResponded.then(resp => resp.json()).then(response => {
      var nextGame = buildGame(response.game, false);
      this.setState(nextGame);
    });

    return { pending: true };
  },
  stonePlaced: function(rowIndex) {
    return (cellIndex) => {
      return () => {
        if (!this.state.pending) {
          const actionsEndpoint = `${SERVER}/games/${gameId}/actions`;
          const action = {
            type: STONE_PLACED,
            rowIndex: rowIndex,
            cellIndex: cellIndex,
            player: this.state.player
          };

          const game = this.state;
          const optimisticBoard = optimisticallyPlace(game, action);

          this.setState({ ...game, board: optimisticBoard });

          let gameResponded = fetch(
            actionsEndpoint,
            { method: "POST", body: JSON.stringify(action) }
          );

          gameResponded.then(resp => {
            resp.json().then(gameState => {
              const nextGame = buildGame(gameState.game);

              if (resp.ok) {
                this.setState(nextGame);
              } else {
                this.setState({ ...nextGame, error: gameState.error });
              };
            })
          });
        }
      };
    };
  },
  errorDisplay: function() {
    const { error } = this.state;

    if (error) {
      return <p>Error: {error}</p>
    }
  },
  render: function() {
    return (
      <div className="app">
        <p>Current Player is {this.state.currentPlayer}</p>
        {this.errorDisplay()}
        <Board stonePlaced={this.stonePlaced} board={this.state.board} pending={this.state.pending} />
      </div>
    )
  }
});

var Board = React.createClass({
  boardOrPending: function() {
    if (this.props.pending) {
      return <p>Waiting for game data</p>
    } else {
      return (
        this.props.board.map((row, rowIndex) =>
          <Row key={rowIndex} stones={row} onStonePlaced={this.props.stonePlaced(rowIndex)} />
        )
      )
    }
  },
  render: function() {
    return (
      <div className='board'>
        {this.boardOrPending()}
      </div>
    );
  }
});

var Row = React.createClass({
  render: function() {
    return (
      <div className='row'>
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
        <Stone stone={this.props.stone.stone} pending={this.props.stone.pending} />
      </div>
    )
  }
});

var Stone = React.createClass({
  render: function() {
    const { pending, stone } = this.props;
    return <div className={`stone ${stone.toLowerCase()} ${pending ? 'pending' : ''}`}></div>
  }
});

let RootComp = React.createClass({
  render: function() {
    return (
      <div>
        <h1>sldkfj</h1>;
        {this.props.children}
      </div>
    )
  }
});

let Wrapper = React.createClass({
  render: function() {
    return (
      <div>
        <p>Wrapper</p>
        {this.props.children}
      </div>
    )
  }
});

let router = (
  <Router>
    <Route path="/" component={Wrapper}>
      <Route path="*" component={RootComp} />
    </Route>
  </Router>
);

ReactDOM.render(
  router,
  document.getElementById('container')
);
