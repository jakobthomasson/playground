import { createAction } from 'typesafe-actions';
import { START_CREATE_SYSTEM_ITEM, START_UPDATE_PATH } from './constants';

export const startCreateSystemItem = createAction(
  START_CREATE_SYSTEM_ITEM,
  resolve => (payload: { type: System.PathType; parentPathId: string }) => resolve(payload),
);

export const startUpdatePath = createAction(
  START_UPDATE_PATH,
  resovle => (payload: { partialPath: PartialWithId<System.Path> }) => resovle(payload),
);
