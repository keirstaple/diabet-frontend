import React from 'react';
import { Route, Router } from 'react-router';

import { App } from './views';

const routes = (history) => (
  <Router history={history}>
    <Route path="/" component={App} />
  </Router>
);

export default routes;
