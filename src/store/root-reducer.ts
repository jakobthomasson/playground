import { combineReducers } from 'redux';
import { windowReducer } from './domain/window';
import { pathReducer } from './domain/path';
import { systemItemReducer } from './domain/systemItem';

const rootReducer = combineReducers({
  windowDomain: windowReducer,
  pathDomain: pathReducer,
  systemItemDomain: systemItemReducer,
});

export default rootReducer;
