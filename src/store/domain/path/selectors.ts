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

export const containerPath = createSelector(
  path,
  path => (path.type === 'folder' || path.type === 'location' ? path : null),
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

export const newPathName = createSelector(
  (state: Types.RootState, ownProps: { parentPathId: string; type: System.PathType }) => {
    return { pathId: ownProps.parentPathId, type: ownProps.type };
  },
  (state: Types.RootState, ownProps: { parentPathId: string; type: System.PathType }) =>
    containerPath(state, { pathId: ownProps.parentPathId }),
  byId,
  (ownProps, parentPath, byId) => {
    const childPathNames = parentPath
      ? R.pipe(
          parentPath.childIds,
          R.map(id => byId[id].name),
        )
      : [];

    const placeHolder = `New ${ownProps.type}`;
    let name = placeHolder;
    let uniqueNumber = 1;
    for (let i = 0; i < childPathNames.length; i += 1) {
      const currentName = childPathNames[i];
      if (name === currentName) {
        name = `${placeHolder} (${uniqueNumber})`;
        uniqueNumber += 1;
        i = 0;
      }
    }

    return name;
  },
);
