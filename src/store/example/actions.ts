import { createAction } from 'typesafe-actions';
import { SET_DOMAIN, START } from './constants';

export const setDomain = createAction(SET_DOMAIN, resolve => {
  return (payload: System.NormalizedDomain<PG.Example>) => resolve(payload);
});

export const startSaga = createAction(START);
