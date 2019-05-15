import { getType } from 'typesafe-actions';
import { UiAction, UiState, uiActions as actions } from './';
import * as R from 'remeda';

const initialState: UiState = {
  visibleWindowIds: [],
};

export default (state: UiState = initialState, action: UiAction): UiState => {
  switch (action.type) {
    case getType(actions.showWindow):
      return R.set(state, 'visibleWindowIds', R.uniq([...state.visibleWindowIds, action.payload.windowId]));
    case getType(actions.hideWindow):
      return R.set(state, 'visibleWindowIds', R.reject(state.visibleWindowIds, i => i === action.payload.windowId));
    default:
      return state;
  }
};
