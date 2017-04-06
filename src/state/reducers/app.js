import { diabetApi } from '../../api';

const INITIAL_STATE = { measurementsRange: {}, measurementsPastDay: {}, isFetching: false, isPosting: false, postResponse: {}, appInitialized: false };

const INIT_APP                          = 'INIT_APP';

const GET_MEASUREMENTS_RANGE            = 'GET_MEASUREMENTS_RANGE';
const GET_MEASUREMENTS_RANGE_SUCCESS    = 'GET_MEASUREMENTS_RANGE_SUCCESS';
const GET_MEASUREMENTS_RANGE_FAILURE    = 'GET_MEASUREMENTS_RANGE_FAILURE';

const GET_MEASUREMENTS_PAST_DAY         = 'GET_MEASUREMENTS_PAST_DAY';
const GET_MEASUREMENTS_PAST_DAY_SUCCESS = 'GET_MEASUREMENTS_PAST_DAY_SUCCESS';
const GET_MEASUREMENTS_PAST_DAY_FAILURE = 'GET_MEASUREMENTS_PAST_DAY_FAILURE';

const POST_MEASUREMENT                  = 'POST_MEASUREMENT';
const POST_MEASUREMENT_SUCCESS          = 'POST_MEASUREMENT_SUCCESS';
const POST_MEASUREMENT_FAILURE          = 'POST_MEASUREMENT_FAILURE';


// const CREATE_MEASUREMENTS = 'CREATE_MEASUREMENTS';

export const initializeApp = () => ({ type: INIT_APP });

//diabet actions
export const getMeasurementsRange = payload => ({ type: GET_MEASUREMENTS_RANGE, payload });
export const getMeasurementsRangeSuccess = payload => ({ type: GET_MEASUREMENTS_RANGE_SUCCESS, payload });
export const getMeasurementsRangeFailure = error => ({ type: GET_MEASUREMENTS_RANGE_FAILURE, error });

export const getMeasurementsPastDay = payload => ({ type: GET_MEASUREMENTS_PAST_DAY, payload });
export const getMeasurementsPastDaySuccess = payload => ({ type: GET_MEASUREMENTS_PAST_DAY_SUCCESS, payload });
export const getMeasurementsPastDayFailure = error => ({ type: GET_MEASUREMENTS_PAST_DAY_FAILURE, error });

export const postMeasurement = payload => ({ type: POST_MEASUREMENT, payload });
export const postMeasurementSuccess = payload => ({ type: POST_MEASUREMENT_SUCCESS, payload });
export const postMeasurementFailure = error => ({ type: POST_MEASUREMENT_FAILURE, error });

//thunks
export const getMeasurementsRangeThunk = (inputs) => dispatch => {
  console.log('getMeasurementsThunk')
  dispatch(getMeasurementsRange());
  return diabetApi.getMeasurementsRange(inputs).then(
    data => dispatch(getMeasurementsRangeSuccess(data)),
    err => dispatch(getMeasurementsRangeFailure(err))
  )
};

export const getMeasurementsPastDayThunk = () => dispatch => {
  console.log('getMeasurementsThunk')
  dispatch(getMeasurementsPastDay());
  return diabetApi.getMeasurementsPastDay().then(
    data => dispatch(getMeasurementsPastDaySuccess(data)),
    err => dispatch(getMeasurementsPastDayFailure(err))
  )
};

export const postMeasurementThunk = (inputs) => dispatch => {
  console.log('postMeasurementThunk')
  dispatch(postMeasurement());
  return diabetApi.postMeasurement(inputs).then(
    data => dispatch(postMeasurementSuccess(data)),
    err => dispatch(postMeasurementFailure(err))
  )
}

const reducer = (state = INITIAL_STATE, action) => {
  console.log('reducer')
  switch(action.type) {
    case INIT_APP:
      console.log('inside init case')
      return {
        ...state,
        appInitialized: true
      };
    case GET_MEASUREMENTS_RANGE:
      return {
        ...state,
        isFetching: true
      };
    case GET_MEASUREMENTS_RANGE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        measurementsRange: action.payload
      }
    case GET_MEASUREMENTS_RANGE_FAILURE:
      return {
          ...state,
          isFetching: false,
          error: action.error
      };
    case GET_MEASUREMENTS_PAST_DAY:
      return {
        ...state,
        isFetching: true
      };
    case GET_MEASUREMENTS_PAST_DAY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        measurementsPastDay: action.payload
      }
    case GET_MEASUREMENTS_PAST_DAY_FAILURE:
      return {
          ...state,
          isFetching: false,
          error: action.error
      };
    case POST_MEASUREMENT:
      return {
        ...state,
        isPosting: true
      };
    case POST_MEASUREMENT_SUCCESS:
      return {
        ...state,
        isPosting: false,
        postResponse: action.payload
      }
    case POST_MEASUREMENT_FAILURE:
      return {
          ...state,
          isPosting: false,
          error: action.error
      };
    default:
      return state;
  }
}

export default reducer;
