import { combineReducers } from 'redux';
import MeasurementsReducer from './reducer_measurements';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  measurements: MeasurementsReducer,
  form: formReducer
});

export default rootReducer;
