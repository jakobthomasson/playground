import { createAction } from 'typesafe-actions';
import { ADD, UPDATE } from './constants';

export const add = createAction(ADD, resolve => (payload: { path: System.Path }) => resolve(payload));
export const update = createAction(UPDATE, resolve => (payload: { partialPath: PartialWithId<System.Path> }) =>
  resolve(payload),
);
