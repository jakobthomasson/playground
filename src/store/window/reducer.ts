import { getType, isActionOf, isOfType } from 'typesafe-actions';
import { WindowAction, WindowState, windowActions as actions } from './';
import * as R from 'remeda';
import { byId } from './selectors';
const initialState: WindowState = {
  byId: {},
  allIds: [],
};

export default (state: WindowState = initialState, action: WindowAction): WindowState => {
  let id = null;
  switch (action.type) {
    case getType(actions.open):
      const { id } = action.payload;

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

  return null;
  // switch (action.type) {
  //   case getType(actions.open):

  //   return null

  // default:
  //   return state;
  // }
};

// return R.evolve<Partial<WindowState>, WindowState>(
//       { byId: R.assoc(id, '2'), allIds: R.prepend(id) },
//       state,
//     );
// case getType(act
// const action = action;
// case getType(actions.setSelectedId):
//   return R.assoc('selectedId', action.payload, state);
// case getType(actions.setDomain):
//   return { ...state, byId: action.payload.byId, allIds: action.payload.allIds };
// case getType(actions.update):
//   id = action.payload.id;
//   return R.assocPath(['byId', id], R.merge(state.byId[id], action.payload), state);
// case getType(actions.add):
//   id = action.payload.id;
//   return R.evolve<Partial<DocumentState>, DocumentState>(
//     { byId: R.assoc(id, action.payload), allIds: R.prepend(id) },
//     state,
//   );
// case getType(actions.remove):
//   id = action.payload;
//   return R.evolve<Partial<DocumentState>, DocumentState>({ byId: R.dissoc(id), allIds: R.without([id]) }, state);
