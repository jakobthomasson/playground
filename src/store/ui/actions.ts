import { createAction } from 'typesafe-actions';
import { HIDE_WINDOW, SHOW_WINDOW } from './constants';

export const showWindow = createAction(SHOW_WINDOW, resolve => (payload: { windowId: string }) => resolve(payload));
export const hideWindow = createAction(HIDE_WINDOW, resolve => (payload: { windowId: string }) => resolve(payload));
