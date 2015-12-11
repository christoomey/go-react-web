import React from 'react';
import { Route } from 'react-router';

import Layout from 'components/Layout';
import Game from 'components/Game';
import NewGame from 'components/NewGame';

export default (
  <Route path='/' component={Layout}>
    <Route path='/games/new' component={NewGame} />
    <Route path='/games/:gameId/:player' component={Game} />
  </Route>
);
