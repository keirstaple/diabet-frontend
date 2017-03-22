import { diabetApi } from '../../api';

const INITIAL_STATE = { measurements: {}, isFetching: false, appInitialized: false };

const INIT_APP                 = 'INIT_APP';
const GET_MEASUREMENTS         = 'GET_MEASUREMENTS';
const GET_MEASUREMENTS_SUCCESS = 'GET_MEASUREMENTS_SUCCESS';
const GET_MEASUREMENTS_FAILURE = 'GET_MEASUREMENTS_FAILURE';

// const CREATE_MEASUREMENTS = 'CREATE_MEASUREMENTS';

export const initializeApp = () => ({ type: INIT_APP });

//diabet actions
export const getMeasurements = payload => ({ type: GET_MEASUREMENTS, payload });
export const getMeasurementsSuccess = payload => ({ type: GET_MEASUREMENTS_SUCCESS, payload });
export const getMeasurementsFailure = error => ({ type: GET_MEASUREMENTS_FAILURE, error });

//thunks
export const getMeasurementsThunk = () => dispatch => {
  console.log('getMeasurementsThunk')
  dispatch(getMeasurements());
  return diabetApi.getMeasurements().then(
    data => dispatch(getMeasurementsSuccess(data)),
    err => dispatch(getMeasurementsFailure(err)),
  )
};

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
    default:
      return state;
  }
}

export default reducer;
