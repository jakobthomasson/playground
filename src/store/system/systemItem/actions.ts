import { createAction } from 'typesafe-actions';
import { START_CREATE_SYSTEM_ITEM } from './constants';

export const startCreateSystemItem = createAction(
  START_CREATE_SYSTEM_ITEM,
  resolve => (payload: { type: System.SystemItemType; contextPathId: string }) => resolve(payload),
);