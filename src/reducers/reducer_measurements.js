import { FETCH_MEASUREMENTS } from '../actions/index';

const INITIAL_STATE = { all: [], measurment: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_MEASUREMENTS:
    return { ...state, all: action.payload.data };
  default:
    return state;
  }
}
