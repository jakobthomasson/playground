import { getType } from 'typesafe-actions';
import { PathAction, PathState, pathActions as actions } from './';
import { domainHelper } from 'helpers';
import * as R from 'remeda';

const rootPath: System.LocationPath = {
  id: 'root',
  childIds: [],
  name: 'root',
  parentId: null,
  type: 'location',
  icon: 'placeholder',
};

const initialState: PathState = {
  byId: R.objOf(rootPath, rootPath.id),
  allIds: [rootPath.id],
};

export default (state: PathState = initialState, action: PathAction): PathState => {
  switch (action.type) {
    case getType(actions.add):
      return domainHelper.add(state, action.payload.path);
    case getType(actions.update):
      return domainHelper.update(state, action.payload.partialPath);
    case getType(actions.remove):
      return domainHelper.remove(state, action.payload.pathId);
    default:
      return state;
  }
};
