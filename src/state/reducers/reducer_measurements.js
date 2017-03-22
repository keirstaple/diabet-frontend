import { FETCH_MEASUREMENTS } from '../actions/index';

const INITIAL_STATE = { all: [], measurement: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_MEASUREMENTS:
    console.log('payload: ', action.payload.data)
    return { ...state, all: action.payload.data };
  default:
    return state;
  }
}
