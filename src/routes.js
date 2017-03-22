import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';

import { App, NewMeasurement } from './views';

const routes = (history) => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={NewMeasurement} />
    </Route>
  </Router>
);

export default routes;
