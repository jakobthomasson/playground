import { getType } from 'typesafe-actions';
import { UiAction, UiState, uiActions as actions } from './';
import * as R from 'remeda';

const initialState: UiState = {
  visibleWindowIds: [],
  pageDimensions: null,
  coordinates: null,
  contextMenu: null,
};

export default (state: UiState = initialState, action: UiAction): UiState => {
  switch (action.type) {
    case getType(actions.showWindow):
      const visibleWindowIds = R.reject(state.visibleWindowIds, i => i === action.payload.windowId); // used for z-index
      return R.set(state, 'visibleWindowIds', [...visibleWindowIds, action.payload.windowId]);
    case getType(actions.hideWindow):
      return R.set(state, 'visibleWindowIds', R.reject(state.visibleWindowIds, i => i === action.payload.windowId));
    case getType(actions.setPageDimensions):
      return R.set(state, 'pageDimensions', action.payload.pageDimensions);
    case getType(actions.setCoordinates):
      return R.set(state, 'coordinates', action.payload.coordinates);
    case getType(actions.setContextMenu):
      return R.set(state, 'contextMenu', action.payload.contextMenu);
    default:
      return state;
  }
};
