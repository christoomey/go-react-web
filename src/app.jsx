const WHITE = 'WHITE';
const BLACK = 'BLACK';
const EMPTY = 'EMPTY';

let initialBoard = [
  [EMPTY, BLACK, WHITE, EMPTY, BLACK, WHITE, BLACK, EMPTY, WHITE],
  [WHITE, BLACK, WHITE, EMPTY, BLACK, WHITE, BLACK, EMPTY, WHITE],
  [WHITE, BLACK, WHITE, EMPTY, BLACK, WHITE, BLACK, EMPTY, WHITE],
  [WHITE, BLACK, WHITE, EMPTY, BLACK, WHITE, BLACK, EMPTY, WHITE],
  [WHITE, BLACK, WHITE, EMPTY, BLACK, WHITE, BLACK, EMPTY, WHITE],
  [WHITE, BLACK, WHITE, EMPTY, BLACK, WHITE, BLACK, EMPTY, WHITE],
  [WHITE, BLACK, WHITE, EMPTY, BLACK, WHITE, BLACK, EMPTY, WHITE],
  [WHITE, BLACK, WHITE, EMPTY, BLACK, WHITE, BLACK, EMPTY, WHITE],
  [WHITE, BLACK, WHITE, EMPTY, BLACK, WHITE, BLACK, EMPTY, WHITE],
];

var Board = React.createClass({
  render: function() {
    return (
      <div className="board">
        {initialBoard.map((row, i) => <Row key={i} stones={row} />)}
      </div>
    );
  }
});

var Row = React.createClass({
  render: function() {
    return (
      <div className="row">
        {this.props.stones.map((stone, i) =>
          <Cell key={i} stone={stone} />
        )}
      </div>
    )
  }
});

var Cell = React.createClass({
  render: function() {
    return (
      <div className="cell">
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
  <Board />,
  document.getElementById('container')
);

// set nocindent
// setl autoindent
// setl indentexpr=''
