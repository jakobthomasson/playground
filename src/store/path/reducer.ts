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
    case getType(actions.move):
      return state;
    default:
      return state;
  }
};
