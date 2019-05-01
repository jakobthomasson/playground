import { createSelector } from 'reselect';
import Types from 'Types';

export const domain = (state: Types.RootState) => state.systemItemDomain;
export const byId = (state: Types.RootState) => state.systemItemDomain.byId;
export const allIds = (state: Types.RootState) => state.systemItemDomain.allIds;
