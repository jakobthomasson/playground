import { createSelector } from 'reselect';
import { windowSelectors } from 'store/domain/window';
import { uiSelectors } from 'store/ui';
import * as R from 'remeda';

export const selectedWindow = createSelector(
  windowSelectors.byId,
  uiSelectors.visibleWindowIds,
  (windowById, visibleWindowIds) => windowById[R.last(visibleWindowIds)],
);
