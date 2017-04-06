import { createSelector } from 'reselect';

export const appState = state =>  state.app;
export const routeState = state => state.routing;
export const formState = state => state.form;

export const measurementsRangeData = createSelector(
  appState,
  ({ measurementsRange }) => measurementsRange
);

export const measurementsRangeResults = createSelector(
  measurementsRangeData,
  ({ results }) => results
);

export const measurementsPastDayData = createSelector(
  appState,
  ({ measurementsPastDay }) => measurementsPastDay
);

export const measurementsPastDayResults = createSelector(
  measurementsPastDayData,
  ({ results }) => results
);

export const locationBeforeTransitions = createSelector(
  routeState,
  ({ locationBeforeTransitions }) => locationBeforeTransitions
);

// export const overviewInputFormValues = createSelector(
//   formState,
//   ({ overviewInputForm }) => overviewInputForm.values
// );

export const postResponse = createSelector(
  appState,
  ({ postResponse }) => postResponse
)

export const postResponseStatus = createSelector(
  postResponse,
  ({ status }) => status
)
