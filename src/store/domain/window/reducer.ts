import { getType } from 'typesafe-actions';
import { WindowAction, WindowState, windowActions as actions } from './';
import { domainHelper } from 'helpers';
const initialState: WindowState = {
  byId: {},
  allIds: [],
};

export default (state: WindowState = initialState, action: WindowAction): WindowState => {
  switch (action.type) {
    case getType(actions.add):
      return domainHelper.add(state, action.payload.window);
    case getType(actions.update):
      return domainHelper.update(state, action.payload.partialWindow);
    case getType(actions.remove):
      return domainHelper.remove(state, action.payload.windowId);
    default:
      return state;
  }
};
