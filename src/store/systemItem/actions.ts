import { createAction } from 'typesafe-actions';
import { ADD } from './constants';

export const add = createAction(ADD, resolve => (payload: { systemItem: System.SystemItem }) => resolve(payload));
