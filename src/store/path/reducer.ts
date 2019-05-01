import { getType } from 'typesafe-actions';
import { PathAction, PathState, pathActions as actions } from './';
import * as R from 'remeda';

const rootPath: System.Path = {
  id: 'iamroot',
  parentPathId: null,
  name: 'root',
  systemItemIds: [],
};

const initialState: PathState = {
  byId: R.objOf(rootPath, rootPath.id),
  allIds: [rootPath.id],
};

export default (state: PathState = initialState, action: PathAction): PathState => {
  switch (action.type) {
    case getType(actions.add):
      const {
        payload: { path },
      } = action;
      return {
        byId: R.set(state.byId, path.id, path),
        allIds: [...state.allIds, path.id],
      };

    case getType(actions.update):
      const {
        payload: { partialPath },
      } = action;
      return {
        byId: R.set(state.byId, partialPath.id, R.merge(state.byId[partialPath.id], partialPath)),
        allIds: state.allIds,
      };

    default:
      return state;
  }
};
