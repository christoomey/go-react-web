import React                    from 'react';
import { Provider }             from 'react-redux';
import { ReduxRouter }          from 'redux-router';
import DevTools                 from './DevTools';
import { createDevToolsWindow } from '../utils';

import routes                   from '../routes';

export default React.createClass({
  propTypes: {
    store : React.PropTypes.object.isRequired,
    debug : React.PropTypes.bool,
    debugExternal : React.PropTypes.bool
  },

  defaultProps: {
    debug: false,
    debugExternal: true
  },

  renderDevTools: function() {
    if (!this.props.debug) {
      return null;
    }

    return this.props.debugExternal ?
      createDevToolsWindow(this.props.store) : <DevTools />;
  },

  render: function() {
    return (
      <Provider store={this.props.store}>
        <div>
          <ReduxRouter>
            {routes}
          </ReduxRouter>
          {this.renderDevTools()}
        </div>
      </Provider>
    );
  }
});
