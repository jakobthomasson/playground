import { createSelector } from 'reselect';
import { pathSelectors } from 'store/domain/path';
import { systemItemSelectors } from 'store/domain/systemItem';

export const systemItemFromPathId = createSelector(
  pathSelectors.path,
  systemItemSelectors.byId,
  (path, systemItemById) => {
    return systemItemById[path.systemItemId!];
  },
);
