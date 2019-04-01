import { getType } from 'typesafe-actions';
import { ExampleAction, ExampleState, exampleActions as actions } from './';

const initialState: ExampleState = {
  // byId: {},
  // allIds: [],
};

export default (state: ExampleState = initialState, action: ExampleAction): ExampleState => {
  // switch (action.type) {
  //   case getType(actions.setSelectedId):
  //     return R.assoc('selectedId', action.payload, state);
  //   case getType(actions.setDomain):
  //     return { ...state, byId: action.payload.byId, allIds: action.payload.allIds };
  //   case getType(actions.update):
  //     id = action.payload.id;
  //     return R.assocPath(['byId', id], R.merge(state.byId[id], action.payload), state);
  //   case getType(actions.add):
  //     id = action.payload.id;
  //     return R.evolve<Partial<DocumentState>, DocumentState>(
  //       { byId: R.assoc(id, action.payload), allIds: R.prepend(id) },
  //       state,
  //     );
  //   case getType(actions.remove):
  //     id = action.payload;
  //     return R.evolve<Partial<DocumentState>, DocumentState>({ byId: R.dissoc(id), allIds: R.without([id]) }, state);
  // default:
  return state;
};
