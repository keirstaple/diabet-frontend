import React from 'react';
import { Route, Router } from 'react-router';

import { App, Overview } from './views';

const routes = (history) => (
  <Router history={history}>
    <Route path="/" component={App} />
    <Route path="/overview" component={Overview} />
  </Router>
);

export default routes;
