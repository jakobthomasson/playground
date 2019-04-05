import { combineReducers } from 'redux';
import { exampleReducer } from './example';
import { windowReducer } from './window';

const rootReducer = combineReducers({
  exampleDomain: exampleReducer,
  windowDomain: windowReducer,
});

export default rootReducer;
