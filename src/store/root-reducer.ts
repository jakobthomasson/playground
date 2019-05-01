import { combineReducers } from 'redux';
import { windowReducer } from './window';
import { pathReducer } from './path';
import { systemItemReducer } from './systemItem';

const rootReducer = combineReducers({
  windowDomain: windowReducer,
  pathDomain: pathReducer,
  systemItemDomain: systemItemReducer,
});

export default rootReducer;
