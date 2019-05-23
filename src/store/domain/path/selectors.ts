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

// export const newPathName = createSelector(
//   (state: Types.RootState, ownProps: { pathId: string; systemItemType: System.SystemItemType }) => ownProps,
//   path,
//   byId,
//   (ownProps, path, byId) => {
//     // const lol = R.pathOr({ x: 10 }, ['x'], 2); // 2
//     // const lol2: string[] = R.pathOr(path, ['childIds'], [] ); // 2
//     // console.log('test: ', lol2);
//     const newPath: System.Path = {
//       id: 'hej',
//       childIds: null,
//       name: 'lol',
//       parentId: '',
//       systemItemId: 'asd',
//     };
//     console.log(path);
//     const paths = R.pipe(
//       path,
//       R.pathOr(['childIds'], []),
//       R.map(id => byId[id]),

//       // R.prop('childIds'),
//       // ids => (ids ? ids : []),
//     );
//     console.log(paths);
//     // path.childIds.map(id => byId[id]);
//     return path;
//   },
// );
