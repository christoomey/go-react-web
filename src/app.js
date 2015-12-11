import React          from 'react';
import ReactDOM       from 'react-dom';
import Root           from 'containers/Root';
import configureStore from './configureStore';

const targetNode = document.getElementById('root');
const store  = configureStore(window.__INITIAL_STATE__, __DEBUG__);

ReactDOM.render(
  (
    <Root
      store={store}
      debug={__DEBUG__}
      debugExternal={__DEBUG_NW__} />
  ),
  targetNode
);
