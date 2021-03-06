import { ActionType } from 'typesafe-actions';
import * as windowConstants from './constants';
import * as windowActions from './actions';
import * as windowSelectors from './selectors';
import windowReducer from './reducer';

// export type DocumentAction = ActionType<typeof exampleActions>;

export type WindowAction = ActionType<typeof windowActions>;
export type WindowState = System.NormalizedDomain<System.Window>;

export { windowConstants, windowActions, windowReducer, windowSelectors };
