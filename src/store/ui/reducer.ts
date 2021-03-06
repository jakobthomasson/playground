import { getType } from 'typesafe-actions';
import { UiAction, UiState, uiActions as actions } from './';
import * as R from 'remeda';

const initialState: UiState = {
  visibleWindowIds: [],
  pageDimensions: { height: 0, width: 0 },
  coordinates: null,
  contextMenu: null,
  selectedPathIds: [],
  renamingPathId: null,
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
    case getType(actions.setSelectedPathIds):
      return R.set(state, 'selectedPathIds', action.payload.pathIds);
    case getType(actions.toggleSelectedPathIds):
      const removeIds = R.intersection(state.selectedPathIds, action.payload.pathIds);
      const addIds = R.difference(action.payload.pathIds, removeIds);
      return R.set(
        state,
        'selectedPathIds',
        R.pipe(
          state.selectedPathIds,
          R.difference(removeIds),
          R.concat(addIds),
        ),
      );
    case getType(actions.setRenamingPathId):
      return R.set(state, 'renamingPathId', action.payload.pathId);
    default:
      return state;
  }
};
