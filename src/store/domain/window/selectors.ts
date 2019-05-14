import { createSelector } from 'reselect';
import * as R from 'remeda';
import Types from 'Types';

export const domain = (state: Types.RootState) => state.windowDomain;

export const byId = (state: Types.RootState) => state.windowDomain.byId;
export const allIds = (state: Types.RootState) => state.windowDomain.allIds;

export const windows = createSelector(
  byId,
  allIds,
  (byId, allIds) => allIds.map(id => byId[id]),
);

export const window = (state: Types.RootState, ownProps: { windowId: string }) =>
  state.windowDomain.byId[ownProps.windowId];

export const systemItemWindow = createSelector(
  (state: Types.RootState, ownProps: { systemItemId: string }) => ownProps.systemItemId,
  windows,
  (systemItemId, windows) => {
    const window = R.find(windows, w => w.systemItemId === systemItemId);
    return window || null;
  },
);

export const highestZIndex = createSelector(
  windows,
  windows => {
    const window = R.sort(windows, (a, b) => b.zIndex - a.zIndex)[0];
    // console.log(window);
    return window ? window.zIndex + 1 : 1;
  },
);
