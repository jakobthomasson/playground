import { getType } from 'typesafe-actions';
import { WindowAction, WindowState, windowActions as actions } from './';
import * as R from 'remeda';
const initialState: WindowState = {
  byId: {},
  allIds: [],
};

export default (state: WindowState = initialState, action: WindowAction): WindowState => {
  let id: string;
  switch (action.type) {
    case getType(actions.open):
      const date = new Date();
      id = date.getTime().toString();

      const window: System.Window = {
        id,
        dimensions: { height: 200, width: 200 },
        position: { x: 0, y: 0 },
        zIndex: 0,
      };

      return {
        byId: R.set(state.byId, id, window),
        allIds: [...state.allIds, id],
      };
    case getType(actions.close):
      id = action.payload.id;
      return {
        byId: R.omit(state.byId, [id]),
        allIds: R.reject(state.allIds, i => i === id),
      };
    // const byId = R.omit(state.byId, [`${}`]);

    default:
      return state;
  }
};
