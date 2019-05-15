import Types from 'Types';
import { createSelector } from 'reselect';
import * as R from 'remeda';

export const visibleWindowIds = (state: Types.RootState) => state.uiDomain.visibleWindowIds;

export const windowZNumber = createSelector(
  (state: Types.RootState, ownProps: { windowId: string }) => ownProps.windowId,
  visibleWindowIds,
  (windowId, visibleWindowIds) => R.findIndex(visibleWindowIds, id => id === windowId) + 1,
);
