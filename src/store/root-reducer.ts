import { combineReducers } from 'redux';
import { windowReducer } from './domain/window';
import { pathReducer } from './domain/path';
import { systemItemReducer } from './domain/systemItem';
import { uiReducer } from './ui';

const rootReducer = combineReducers({
  windowDomain: windowReducer,
  pathDomain: pathReducer,
  systemItemDomain: systemItemReducer,
  uiDomain: uiReducer,
});

export default rootReducer;
