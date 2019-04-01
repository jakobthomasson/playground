import { combineReducers } from 'redux';
import { exampleReducer } from './example';

const rootReducer = combineReducers({
  exampleDomain: exampleReducer,
});

export default rootReducer;
