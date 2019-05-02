import { createAction } from 'typesafe-actions';
import { ADD, UPDATE, REMOVE } from './constants';
export const add = createAction(ADD, resolve => (payload: { systemItem: System.SystemItem }) => resolve(payload));
export const update = createAction(
  UPDATE,
  resolve => (payload: { partialSystemItem: PartialWithId<System.SystemItem> }) => resolve(payload),
);
export const remove = createAction(REMOVE, resolve => (payload: { systemItemId: string }) => resolve(payload));
