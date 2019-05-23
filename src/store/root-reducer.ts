import { combineReducers } from 'redux';
import { windowReducer } from './domain/window';
import { pathReducer } from './domain/path';
import { uiReducer } from './ui';

const rootReducer = combineReducers({
  windowDomain: windowReducer,
  pathDomain: pathReducer,
  uiDomain: uiReducer,
});

export default rootReducer;
