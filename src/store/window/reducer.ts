import { getType } from 'typesafe-actions';
import { WindowAction, WindowState, windowActions as actions } from './';
import * as R from 'remeda';
const initialState: WindowState = {
  byId: {},
  allIds: [],
};

export default (state: WindowState = initialState, action: WindowAction): WindowState => {
  let id = null;
  switch (action.type) {
    case getType(actions.open):
      id = action.payload.id;

      const newWindow: System.Window = {
        id,
        dimensions: { height: 200, width: 200 },
        position: { x: 0, y: 0 },
        zIndex: 0,
      };

      const byId: System.Map<System.Window> = {
        id: newWindow,
      };

      const allIds = [id];
      const newState: WindowState = R.merge(state, { byId, allIds });

      console.log(newState);
      return newState;

    default:
      return state;
  }
};
