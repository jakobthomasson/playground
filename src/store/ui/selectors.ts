import Types from 'Types';
import { createSelector } from 'reselect';
import * as R from 'remeda';

export const visibleWindowIds = (state: Types.RootState) => state.uiDomain.visibleWindowIds;

export const windowZNumber = createSelector(
  (state: Types.RootState, ownProps: { windowId: string }) => ownProps.windowId,
  visibleWindowIds,
  (windowId, visibleWindowIds) => R.findIndex(visibleWindowIds, id => id === windowId) + 1,
);

export const pageDimensions = (state: Types.RootState) => state.uiDomain.pageDimensions;
export const coordinates = (state: Types.RootState) => state.uiDomain.coordinates;
export const contextMenu = (state: Types.RootState) => state.uiDomain.contextMenu;

export const isPathSelected = (state: Types.RootState, ownProps: { pathId: string }) =>
  R.findIndex(state.uiDomain.selectedPathIds, id => id === ownProps.pathId) !== -1;
