import { getType } from 'typesafe-actions';
import { SystemItemAction, SystemItemState, systemItemActions as actions } from './';
import * as R from 'remeda';

// const rootPath: System.Path = {
//   id: 'iamroot',
//   parentPathId: null,
//   name: 'root',
//   systemItemIds: [],
// };

const initialState: SystemItemState = {
  byId: {},
  allIds: [],
};

export default (state: SystemItemState = initialState, action: SystemItemAction): SystemItemState => {
  switch (action.type) {
    case getType(actions.add):
      return state;
    default:
      return state;
  }
};
