import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import NewMeasurement from './containers/NewMeasurement';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={NewMeasurement} />
  </Route>
);
