import { createSelector } from 'reselect';
import Types from 'Types';
import * as R from 'remeda';

export const domain = (state: Types.RootState) => state.pathDomain;
export const byId = (state: Types.RootState) => state.pathDomain.byId;
export const allIds = (state: Types.RootState) => state.pathDomain.allIds;

export const path = createSelector(
  (state: Types.RootState, ownProps: { pathId: string }) => ownProps.pathId,
  byId,
  (id, byId) => byId[id],
);

export const fullPath = createSelector(
  path,
  byId,
  (path, byId) => {
    function recursivePath(pathId: string, oldFullPath: System.Path[]): System.Path[] {
      const currentPath = byId[pathId];
      const fullPath = R.concat([currentPath], oldFullPath);
      return !currentPath.parentId ? fullPath : recursivePath(currentPath.parentId, fullPath);
    }
    return recursivePath(path.id, []);
  },
);
