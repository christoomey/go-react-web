const WHITE = 'WHITE';
const BLACK = 'BLACK';
const EMPTY = 'EMPTY';

let initialBoard = [
  [WHITE, BLACK, WHITE, EMPTY, BLACK, WHITE, BLACK, EMPTY, WHITE],
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
        {initialBoard.map(row => <Row stones={row} />)}
      </div>
    );
  }
});

var Row = React.createClass({
  render: function() {
    return (
      <div className="row">
        {this.props.stones.map(stone =>
          <Cell stone={stone} />
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
    return <span className={`stone ${this.props.type.toLowerCase()}`}></span>
  }
});

ReactDOM.render(
  <Board />,
  document.getElementById('container')
);

// set nocindent
// setl autoindent
// setl indentexpr=''
