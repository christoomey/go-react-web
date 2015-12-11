import React from 'react';

const Stone = React.createClass({
  propTypes: {
    pending: React.PropTypes.bool,
    stone: React.PropTypes.string,
    size: React.PropTypes.number
  },

  styles: function() {
    const { size } = this.props;
    const sizeStyle = `${size}px`;

    return {
      width: sizeStyle,
      height: sizeStyle,
      borderRadius: `${Math.round(size / 2) - 1}px`
    }
  },

  dynamicClasses: function() {
    const { pending, stone } = this.props;

    return `${stone.toLowerCase()} ${pending ? 'pending' : ''}`;
  },

  render: function() {
    return (
      <div className={`stone ${this.dynamicClasses()}`} style={this.styles()}>
      </div>
    );
  }
});

export default Stone;
