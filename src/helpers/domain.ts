import * as R from 'remeda';

function add<T extends Record<'id', string>>(state: System.NormalizedDomain<T>, item: T): System.NormalizedDomain<T> {
  return {
    byId: R.addProp(state.byId, item.id, item),
    allIds: [...state.allIds, item.id],
  };
}

function update<T extends Record<'id', string>>(
  state: System.NormalizedDomain<T>,
  item: PartialWithId<T>,
): System.NormalizedDomain<T> {
  return {
    ...state,
    byId: R.set(state.byId, item.id, R.merge(state.byId[item.id], item)),
  };
}

function remove<T extends Record<'id', string>>(
  state: System.NormalizedDomain<T>,
  id: string,
): System.NormalizedDomain<T> {
  return {
    byId: R.omit(state.byId, [id]),
    allIds: R.reject(state.allIds, i => i === id),
  };
}

export default { add, update, remove };
