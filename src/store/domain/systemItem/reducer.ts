import { getType } from 'typesafe-actions';
import { SystemItemAction, SystemItemState, systemItemActions as actions } from './';
import { domainHelper } from 'helpers';
const initialState: SystemItemState = {
  byId: {},
  allIds: [],
};

export default (state: SystemItemState = initialState, action: SystemItemAction): SystemItemState => {
  switch (action.type) {
    case getType(actions.add):
      return domainHelper.add(state, action.payload.systemItem);
    case getType(actions.update):
      return domainHelper.update(state, action.payload.partialSystemItem);
    case getType(actions.remove):
      return domainHelper.remove(state, action.payload.systemItemId);

    default:
      return state;
  }
};
