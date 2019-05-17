import { createAction } from 'typesafe-actions';
import {
  HIDE_WINDOW,
  SHOW_WINDOW,
  SET_COORDINATES,
  SET_PAGE_DIMENSIONS,
  SET_CONTEXT_MENU,
  SET_SELECTED_PATH_IDS,
  TOGGLE_SELECTED_PATH_IDS,
} from './constants';

export const showWindow = createAction(SHOW_WINDOW, resolve => (payload: { windowId: string }) => resolve(payload));
export const hideWindow = createAction(HIDE_WINDOW, resolve => (payload: { windowId: string }) => resolve(payload));

export const setCoordinates = createAction(
  SET_COORDINATES,
  resolve => (payload: { coordinates: System.Coordinates | null }) => resolve(payload),
);
export const setPageDimensions = createAction(
  SET_PAGE_DIMENSIONS,
  resolve => (payload: { pageDimensions: System.Dimensions }) => resolve(payload),
);

export const setContextMenu = createAction(
  SET_CONTEXT_MENU,
  resolve => (payload: { contextMenu: System.ContextMenu | null }) => resolve(payload),
);

export const setSelectedPathIds = createAction(
  SET_SELECTED_PATH_IDS,
  resolve => (payload: { pathIds: string[] }) => resolve(payload),
);

export const toggleSelectedPathIds = createAction(
  TOGGLE_SELECTED_PATH_IDS,
  resolve => (payload: { pathIds: string[] }) => resolve(payload),
);
