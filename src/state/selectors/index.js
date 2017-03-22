import { createSelector } from 'reselect';

export const appState = state =>  state.app;
export const routeState = state => state.routing;

export const measurementsData = createSelector(
  appState,
  ({ measurements }) => measurements.data
)

export const locationBeforeTransitions = createSelector(
  routeState,
  ({ locationBeforeTransitions }) => locationBeforeTransitions,
);
