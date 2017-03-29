import { createSelector } from 'reselect';

export const appState = state =>  state.app;
export const routeState = state => state.routing;
export const formState = state => state.form;

export const measurementsData = createSelector(
  appState,
  ({ measurements }) => measurements
);

export const measurementsResults = createSelector(
  measurementsData,
  ({ results }) => results
);

export const locationBeforeTransitions = createSelector(
  routeState,
  ({ locationBeforeTransitions }) => locationBeforeTransitions
);

export const overviewInputFormValues = createSelector(
  formState,
  ({ overviewInputForm }) => overviewInputForm.values
);
