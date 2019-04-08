import { combineReducers } from 'redux';
import { windowReducer } from './window';

const rootReducer = combineReducers({
  windowDomain: windowReducer,
});

export default rootReducer;
