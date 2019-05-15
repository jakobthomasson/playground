import { createSelector } from 'reselect';
import { pathSelectors } from 'store/domain/path';
import { windowSelectors } from 'store/domain/window';
import { uiSelectors } from 'store/ui';
import * as R from 'remeda';

import { systemItemSelectors } from 'store/domain/systemItem';

export const systemItemFromPathId = createSelector(
  pathSelectors.path,
  systemItemSelectors.byId,
  (path, systemItemById) => {
    return systemItemById[path.systemItemId!];
  },
);

export const selectedWindow = createSelector(
  windowSelectors.byId,
  uiSelectors.visibleWindowIds,
  (windowById, visibleWindowIds) => windowById[R.last(visibleWindowIds)],
);
