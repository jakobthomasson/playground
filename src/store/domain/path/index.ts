import { ActionType } from 'typesafe-actions';
import * as pathConstants from './constants';
import * as pathActions from './actions';
import * as pathSelectors from './selectors';
import pathReducer from './reducer';

// export type DocumentAction = ActionType<typeof exampleActions>;

export type PathAction = ActionType<typeof pathActions>;
export type PathState = System.NormalizedDomain<System.Path>;

export { pathConstants, pathActions, pathReducer, pathSelectors };
