import { createAction } from 'typesafe-actions';
import { CLOSE, MINIMIZE, OPEN, RESIZE, SELECT } from './constants';

export const open = createAction(OPEN);
export const close = createAction(CLOSE, resolve => (payload: { id: string }) => resolve(payload));
export const minimize = createAction(MINIMIZE);
export const resize = createAction(RESIZE);
export const select = createAction(SELECT);
