const WHITE = 'WHITE';
const BLACK = 'BLACK';
const EMPTY = 'EMPTY';

var Board = React.createClass({
  render: function() {
    return (
      <table>
        <tbody>
          <Row stones={[WHITE, BLACK, EMPTY, WHITE, BLACK]} />
        </tbody>
      </table>
    );
  }
});

var Row = React.createClass({
  render: function() {
    debugger
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
