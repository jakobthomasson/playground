import { getType } from 'typesafe-actions';
import { SystemItemAction, SystemItemState, systemItemActions as actions } from './';
import * as R from 'remeda';

const initialState: SystemItemState = {
  byId: {},
  allIds: [],
};

export default (state: SystemItemState = initialState, action: SystemItemAction): SystemItemState => {
  switch (action.type) {
    case getType(actions.add):
      const {
        payload: { systemItem },
      } = action;
      return {
        byId: R.set(state.byId, systemItem.id, systemItem),
        allIds: [...state.allIds, systemItem.id],
      };

    default:
      return state;
  }
};
