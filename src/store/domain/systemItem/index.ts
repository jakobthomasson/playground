import { ActionType } from 'typesafe-actions';
import * as systemItemConstants from './constants';
import * as systemItemActions from './actions';
import * as systemItemSelectors from './selectors';
import systemItemReducer from './reducer';

export type SystemItemAction = ActionType<typeof systemItemActions>;
export type SystemItemState = System.NormalizedDomain<System.SystemItem>;

export { systemItemConstants, systemItemActions, systemItemReducer, systemItemSelectors };
