import { diabetApi } from '../../api';

const INITIAL_STATE = { measurements: {}, isFetching: false, isPosting: false, postResponse: {}, appInitialized: false };

const INIT_APP                 = 'INIT_APP';
const GET_MEASUREMENTS         = 'GET_MEASUREMENTS';
const GET_MEASUREMENTS_SUCCESS = 'GET_MEASUREMENTS_SUCCESS';
const GET_MEASUREMENTS_FAILURE = 'GET_MEASUREMENTS_FAILURE';
const POST_MEASUREMENT         = 'POST_MEASUREMENT';
const POST_MEASUREMENT_SUCCESS = 'POST_MEASUREMENT_SUCCESS';
const POST_MEASUREMENT_FAILURE = 'POST_MEASUREMENT_FAILURE';


// const CREATE_MEASUREMENTS = 'CREATE_MEASUREMENTS';

export const initializeApp = () => ({ type: INIT_APP });

//diabet actions
export const getMeasurements = payload => ({ type: GET_MEASUREMENTS, payload });
export const getMeasurementsSuccess = payload => ({ type: GET_MEASUREMENTS_SUCCESS, payload });
export const getMeasurementsFailure = error => ({ type: GET_MEASUREMENTS_FAILURE, error });

export const postMeasurement = payload => ({ type: POST_MEASUREMENT, payload });
export const postMeasurementSuccess = payload => ({ type: POST_MEASUREMENT_SUCCESS, payload });
export const postMeasurementFailure = error => ({ type: POST_MEASUREMENT_FAILURE, error });

//thunks
export const getMeasurementsThunk = (inputs) => dispatch => {
  console.log('getMeasurementsThunk')
  dispatch(getMeasurements());
  return diabetApi.getMeasurements(inputs).then(
    data => dispatch(getMeasurementsSuccess(data)),
    err => dispatch(getMeasurementsFailure(err))
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
    case GET_MEASUREMENTS:
      return {
        ...state,
        isFetching: true
      };
    case GET_MEASUREMENTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        measurements: action.payload
      }
    case GET_MEASUREMENTS_FAILURE:
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
