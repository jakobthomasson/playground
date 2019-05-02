import { createAction } from 'typesafe-actions';
import { ADD, UPDATE, REMOVE } from './constants';

export const add = createAction(ADD, resolve => (payload: { window: System.Window }) => resolve(payload));
export const update = createAction(UPDATE, resolve => (payload: { partialWindow: PartialWithId<System.Window> }) =>
  resolve(payload),
);
export const remove = createAction(REMOVE, resolve => (payload: { windowId: string }) => resolve(payload));
