import { createAction } from 'typesafe-actions';
import {
  START_CLOSE_WINDOW,
  START_MINIMIZE_WINDOW,
  START_OPEN_WINDOW,
  START_RESIZE_WINDOW,
  START_SELECT_WINDOW,
} from './constants';

export const startCloseWindow = createAction(START_CLOSE_WINDOW, resolve => (payload: { id: string }) =>
  resolve(payload),
);
export const startMinimizeWindow = createAction(START_MINIMIZE_WINDOW, resolve => (payload: { id: string }) =>
  resolve(payload),
);
export const startOpenWindow = createAction(START_OPEN_WINDOW, resolve => (payload: { id: string }) =>
  resolve(payload),
);
export const startResizeWindow = createAction(START_RESIZE_WINDOW, resolve => (payload: {}) => resolve(payload));
export const startSelectWindow = createAction(START_SELECT_WINDOW, resolve => (payload: {}) => resolve(payload));
