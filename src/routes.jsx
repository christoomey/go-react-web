import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Layout from 'components/Layout';
import GameList from 'components/GameList';
import Game from 'components/Game';
import NewGame from 'containers/NewGame';

export default (
  <Route path='/' component={Layout}>
    <Route path='/games' component={GameList} />
    <Route path='/games/new' component={NewGame} />
    <Route path='/games/:gameId/:player' component={Game} />
  </Route>
);
