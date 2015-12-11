import React from 'react';

import 'styles/app.scss';

export default React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },

  render: function() {
    return (
      <div className='app'>
        <p>I AM THE LAYOUT</p>
        {this.props.children}
      </div>
    );
  }
});
