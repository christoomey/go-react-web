import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Layout from 'components/Layout';
import Games from 'components/Games';
import GameList from 'components/GameList';
import Game from 'components/Game';
import NewGame from 'components/NewGame';

export default (
  <Route path='/' component={Layout}>
    <Route path='/games' component={Games}>
      <IndexRoute component={GameList} />
      <Route path='new' component={NewGame} />
      <Route path=':gameId/:player' component={Game} />
    </Route>
  </Route>
);
