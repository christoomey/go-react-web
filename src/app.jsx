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
      <table>
        <tbody>
          {initialBoard.map(row => <Row stones={row} />)}
        </tbody>
      </table>
    );
  }
});

var Row = React.createClass({
  render: function() {
    return (
      <tr className="row">
        {this.props.stones.map(stone =>
          <Cell stone={stone} />
        )}
      </tr>
    )
  }
});

var Cell = React.createClass({
  render: function() {
    return (
      <td className="cell">
        {this.props.stone}
      </td>
    )
  }
});

ReactDOM.render(
  <Board />,
  document.getElementById('container')
);

// set nocindent
// setl autoindent
