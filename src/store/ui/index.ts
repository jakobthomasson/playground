import { ActionType } from 'typesafe-actions';
import * as uiConstants from './constants';
import * as uiActions from './actions';
import * as uiSelectors from './selectors';
import uiReducer from './reducer';

export type UiAction = ActionType<typeof uiActions>;
export type UiState = {
  visibleWindowIds: string[];
};

export { uiConstants, uiActions, uiReducer, uiSelectors };
