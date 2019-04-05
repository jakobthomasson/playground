import { createSelector } from 'reselect';
import Types from 'Types';

export const domain = (state: Types.RootState) => state.windowDomain;

export const byId = (state: Types.RootState) => state.windowDomain.byId;
export const allIds = (state: Types.RootState) => state.windowDomain.allIds;

export const windows = createSelector(
  byId,
  allIds,
  (byId, allIds) => allIds.map(id => byId[id]),
);
